//p5.js
let palette
let airColorsArray = []
let airColors = []
let currentColorIndex = 0
let center
let angle = 0
let Cam = new p5.Vector()
let CamTarget = Cam.copy()
let mouse = new p5.Vector()
let shapes = []
let centerLine
let textColor
let globalRatio = 1
var myCanvas = null
function setup() {
  shapes = []
  myCanvas = createCanvas(windowWidth, 700)
  myCanvas.parent('graphic')
  init()
  palette = [
    color('#E86239'),
    color('#3482C5'),
    color('#3FAF36'),
    color('#F5E328'),
  ]
  textColor = color('white')
  airColorsArray = [
    // [color("#FFFFFF"),color("rgb(0,101,0)")],
    // [color("#FFFFFF"),color("rgb(80,0,40)")],
    [color('black'), color('black')],
    // [color("#FFFFFF"),color("#FFFFFF")],
  ]
  for (let i = 0; i < airColorsArray[currentColorIndex].length; i++) {
    airColors.push(airColorsArray[currentColorIndex][i])
  }
  centerLine = new CenterLine(new p5.Vector())
  shapes.push(centerLine)
  for (let i = 0; i < 50; i++) {
    let pos = p5.Vector.random3D().mult(spaceRange)
    i % 2 == 0 ? new Circle(pos) : new Quad(pos)
  }
}
function windowResized() {
  resizeCanvas(windowWidth, 700)
  init()
}
function init() {
  center = new p5.Vector(width * 0.5, height * 0.5)
  globalRatio = dist(0, 0, width, height) / 800
  spaceRange = 150 * globalRatio
}
function draw() {
  mouse.set(mouseX - center.x, mouseY - center.y)
  // angle -= radians(0.5);
  // angle = radians(mouse.x/2);
  CamTarget.x = radians((mouse.y * 0.4) / globalRatio)
  CamTarget.y = radians((mouse.x * 0.4) / globalRatio)
  Cam.lerp(CamTarget, 0.05)
  translate(center.x, center.y)
  background(airColors[airColors.length - 1])
  for (let s of shapes) s.update()
  shapes.sort(function (a, b) {
    return a.dpos.z - b.dpos.z
  })
  for (let s of shapes) s.displayToWorld()
  fill(textColor)
  let fh = width * 0.098
}
class Shape {
  constructor(pos, isRelated = false) {
    this.isRelated = isRelated
    this.startFrame = frameCount + floor(random(240))
    this.defaultPos = pos.copy()
    this.limit = this.defaultPos.mag() * 3
    this.pos = pos
    this.acc = new p5.Vector()
    this.vel = new p5.Vector()
    this.target = this.pos.copy()
    this.color = random(palette)
    this.size = 0
    this.sizeTarget = random(0.5, 1)
    this.sizeMultTarget = this.sizeMult = 1
    this.scale = this.size
    this.dir = this.pos.copy()
    this.dir.normalize()
    shapes.push(this)
    this.isNear = false
  }
  update() {
    if (frameCount >= this.startFrame) this.preUpdate()
    this.dpos = getDPos(this.pos)
    this.nearMouse()
    this.size = lerp(this.size, this.sizeTarget, 0.025)
    this.sizeMult = lerp(this.sizeMult, this.sizeMultTarget, 0.1)
    this.scale = this.size * this.sizeMult
  }
  preUpdate() {
    if (frameCount == this.startFrame) this.sizeTarget = 0
    this.applyForce(this.dir.copy().mult(0.1))
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
    if (this.pos.mag() > this.limit) {
      this.pos = this.defaultPos.copy()
      this.vel.mult(0)
      this.size = 0
      this.sizeTarget = random(0.5, 1)
      this.startFrame = frameCount + floor(random(60, 120))
    }
  }
  applyForce(force) {
    this.acc.add(force)
  }
  displayToWorld() {
    this.display()
    if (this.isRelated) {
      for (let part of this.parent.parts) {
        if (part != this) part.displayRelated()
      }
    }
  }
  display() {}
  displayRelated() {}
  nearMouse() {
    if (mouse.dist(new p5.Vector(this.dpos.x, this.dpos.y)) < height * 0.1) {
      // this.sizeMultTarget = 2;
      this.isNear = true
    } else {
      // this.sizeMultTarget = 1;
      this.isNear = false
    }
  }
}
class Circle extends Shape {
  constructor(pos, isRelated = false) {
    super(pos, isRelated)
    this.name = 'circle'
  }
  display() {
    let r = map(this.dpos.z, spaceRange, -spaceRange, 0, 1)
    let c = gradiant(airColors, r)
    c = lerpColor(this.color, c, r)
    let tc = lerpColor(color(255), c, r)
    push()
    translate(this.dpos.x, this.dpos.y)
    if (this.isNear) {
      fill(textColor)
      textSize(14)
      textAlign(CENTER, CENTER)
      text(this.name + '( )', 0, 0)
    } else {
      noStroke()
      fill(c)
      ellipse(
        0,
        0,
        150 * this.scale * globalRatio,
        150 * this.scale * globalRatio,
      )
    }
    pop()
  }
}
class Quad extends Shape {
  constructor(pos, isRelated = false) {
    super(pos, isRelated)
    this.name = 'quad'
  }
  display() {
    let r = map(this.dpos.z, spaceRange, -spaceRange, 0, 1)
    let c = gradiant(airColors, r)
    c = lerpColor(this.color, c, r)
    push()
    translate(this.dpos.x, this.dpos.y)
    if (this.isNear) {
      fill(textColor)
      textSize(14)
      textAlign(CENTER, CENTER)
      text(this.name + '( )', 0, 0)
    } else {
      noStroke()
      fill(c)
      quad(
        0,
        -75 * this.scale * globalRatio,
        45 * this.scale * globalRatio,
        0,
        0,
        75 * this.scale * globalRatio,
        -45 * this.scale * globalRatio,
        0,
      )
    }
    pop()
  }
}
class CenterLine {
  constructor(pos) {
    this.pos = pos
    this.scale = 30
    this.points = [
      new p5.Vector(-1, 0, 0),
      new p5.Vector(1, 0, 0),
      new p5.Vector(0, -1, 0),
      new p5.Vector(0, 1, 0),
      new p5.Vector(0, 0, -1),
      new p5.Vector(0, 0, 1),
    ]
    this.isNear = false
  }
  update() {
    this.dpos = getDPos(this.pos, true)
    this.nearMouse()
    // console.log(this.dpos.z);
    this.dpoints = []
    for (let p of this.points) {
      this.dpoints.push(getDPos(p))
    }
  }
  nearMouse() {
    if (
      mouse.dist(new p5.Vector(this.dpos.x, this.dpos.y)) <
      spaceRange * 1.5
    ) {
      // this.sizeMultTarget = 2;
      this.isNear = true
    } else {
      // this.sizeMultTarget = 1;
      this.isNear = false
    }
  }
  displayToWorld() {
    if (this.isNear) this.display()
  }
  display() {
    for (let i = 0; i < this.dpoints.length; i++) {
      if (i % 2 == 0) {
        let p1 = this.dpoints[i].copy()
        p1.mult(this.scale * globalRatio)
        let p2 = this.dpoints[i + 1].copy()
        p2.mult(this.scale * globalRatio)
        stroke(textColor)
        line(p1.x, p1.y, p2.x, p2.y)
      }
    }
  }
}
function getDPos(pos, isCon) {
  let dpos = pos.copy()
  // if(isCon)console.log(dpos.x,dpos.y,dpos.z);
  let vx = new p5.Vector(dpos.y, dpos.z)
  // if(isCon)console.log(vx.x,vx.y);
  vx.rotate(Cam.x)
  dpos.set(dpos.x, vx.x, vx.y)
  // if(isCon)console.log(vx.y);
  let vy = new p5.Vector(dpos.x, dpos.z)
  vy.rotate(Cam.y)
  dpos.set(vy.x, dpos.y, vy.y)
  // console.log(dpos.z);
  return dpos
}
function gradiant(pallette, off) {
  let total = pallette.length - 1
  let start = floor(off * total)
  if (start == total) start--
  if (start < 0) start = 0
  else if (start > total - 1) start = total - 1
  let end = start + 1
  if (end > total) end = total
  let gap = 1 / total
  let _off = constrain(off - start * gap, 0, 1)
  // let _off = constrain((off%gap)/gap,0,1);
  // console.log(pallette[start],pallette[end]);
  return lerpColor(pallette[start], pallette[end], _off)
}
