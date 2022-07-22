import dynamic from 'next/dynamic'
import { SketchProps } from 'react-p5'

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

const p5Script = (() => {
  if (typeof window === 'undefined') {
    return {
      preload: {} as any,
      setup: {} as any,
      draw: {} as any,
      windowResized: {} as any,
    }
  }

  const p5 = require('p5')
  const Vector = p5.Vector

  let palette
  let airColorsArray = []
  let airColors = []
  let currentColorIndex = 0
  let center
  let angle = 0
  let Cam = new Vector()
  let CamTarget = Cam.copy()
  let mouse = new Vector()
  let shapes = []
  let centerLine
  let textColor
  let globalRatio = 1
  let myCanvas = null
  let spaceRange

  const setup: SketchProps['setup'] = (p5, canvasParentRef) => {
    p5.setMoveThreshold(0.1)
    class Shape {
      isRelated
      startFrame
      defaultPos
      limit
      pos
      acc
      vel
      target
      color
      size
      sizeTarget
      sizeMultTarget
      sizeMult
      scale
      dir
      isNear
      dpos
      parent

      constructor(pos, isRelated = false) {
        this.isRelated = isRelated
        this.startFrame = p5.frameCount + p5.floor(p5.random(240))
        this.defaultPos = pos.copy()
        this.limit = this.defaultPos.mag() * 3
        this.pos = pos
        this.acc = new Vector()
        this.vel = new Vector()
        this.target = this.pos.copy()
        this.color = p5.random(palette)
        this.size = 0
        this.sizeTarget = p5.random(0.5, 1)
        this.sizeMultTarget = this.sizeMult = 1
        this.scale = this.size
        this.dir = this.pos.copy()
        this.dir.normalize()
        shapes.push(this)
        this.isNear = false
      }
      update() {
        if (p5.frameCount >= this.startFrame) this.preUpdate()
        this.dpos = getDPos(this.pos)
        this.nearMouse()
        this.size = p5.lerp(this.size, this.sizeTarget, 0.025)
        this.sizeMult = p5.lerp(this.sizeMult, this.sizeMultTarget, 0.1)
        this.scale = this.size * this.sizeMult
      }
      preUpdate() {
        if (p5.frameCount == this.startFrame) this.sizeTarget = 0
        this.applyForce(this.dir.copy().mult(0.1))
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
        if (this.pos.mag() > this.limit) {
          this.pos = this.defaultPos.copy()
          this.vel.mult(0)
          this.size = 0
          this.sizeTarget = p5.random(0.5, 1)
          this.startFrame = p5.frameCount + p5.floor(p5.random(60, 120))
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
        if (
          mouse.dist(new Vector(this.dpos.x, this.dpos.y)) <
          p5.height * 0.1
        ) {
          // this.sizeMultTarget = 2;
          this.isNear = true
        } else {
          // this.sizeMultTarget = 1;
          this.isNear = false
        }
      }
    }
    class Circle extends Shape {
      name
      constructor(pos, isRelated = false) {
        super(pos, isRelated)
        this.name = 'circle'
      }
      display() {
        let r = p5.map(this.dpos.z, spaceRange, -spaceRange, 0, 1)
        let c = gradiant(airColors, r)
        c = p5.lerpColor(this.color, c, r)
        let tc = p5.lerpColor(p5.color(255), c, r)
        p5.push()
        p5.translate(this.dpos.x, this.dpos.y)
        if (this.isNear) {
          p5.fill(textColor)
          p5.textSize(14)
          p5.textAlign(p5.CENTER, p5.CENTER)
          p5.text(this.name + '( )', 0, 0)
        } else {
          p5.noStroke()
          p5.fill(c)
          p5.ellipse(
            0,
            0,
            150 * this.scale * globalRatio,
            150 * this.scale * globalRatio,
          )
        }
        p5.pop()
      }
    }
    class Quad extends Shape {
      name

      constructor(pos, isRelated = false) {
        super(pos, isRelated)
        this.name = 'quad'
      }
      display() {
        let r = p5.map(this.dpos.z, spaceRange, -spaceRange, 0, 1)
        let c = gradiant(airColors, r)
        c = p5.lerpColor(this.color, c, r)
        p5.push()
        p5.translate(this.dpos.x, this.dpos.y)
        if (this.isNear) {
          p5.fill(textColor)
          p5.textSize(14)
          p5.textAlign(p5.CENTER, p5.CENTER)
          p5.text(this.name + '( )', 0, 0)
        } else {
          p5.noStroke()
          p5.fill(c)
          p5.quad(
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
        p5.pop()
      }
    }
    class CenterLine {
      pos
      scale
      points
      dpos
      isNear
      dpoints
      constructor(pos) {
        this.pos = pos
        this.scale = 30
        this.points = [
          new Vector(-1, 0, 0),
          new Vector(1, 0, 0),
          new Vector(0, -1, 0),
          new Vector(0, 1, 0),
          new Vector(0, 0, -1),
          new Vector(0, 0, 1),
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
          mouse.dist(new Vector(this.dpos.x, this.dpos.y)) <
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
            p5.stroke(textColor)
            p5.line(p1.x, p1.y, p2.x, p2.y)
          }
        }
      }
    }
    const getDPos = (pos, isCon?) => {
      let dpos = pos.copy()
      // if(isCon)console.log(dpos.x,dpos.y,dpos.z);
      let vx = new Vector(dpos.y, dpos.z)
      // if(isCon)console.log(vx.x,vx.y);
      vx.rotate(Cam.x)
      dpos.set(dpos.x, vx.x, vx.y)
      // if(isCon)console.log(vx.y);
      let vy = new Vector(dpos.x, dpos.z)
      vy.rotate(Cam.y)
      dpos.set(vy.x, dpos.y, vy.y)
      // console.log(dpos.z);
      return dpos
    }
    function gradiant(pallette, off) {
      let total = pallette.length - 1
      let start = p5.floor(off * total)
      if (start == total) start--
      if (start < 0) start = 0
      else if (start > total - 1) start = total - 1
      let end = start + 1
      if (end > total) end = total
      let gap = 1 / total
      let _off = p5.constrain(off - start * gap, 0, 1)
      // let _off = constrain((off%gap)/gap,0,1);
      // console.log(pallette[start],pallette[end]);
      return p5.lerpColor(pallette[start], pallette[end], _off)
    }

    shapes = []
    myCanvas = p5
      .createCanvas(canvasParentRef.clientWidth, canvasParentRef.clientHeight)
      .parent(canvasParentRef)

    init(p5)

    palette = [
      p5.color('#E86239'),
      p5.color('#3482C5'),
      p5.color('#3FAF36'),
      p5.color('#F5E328'),
    ]
    textColor = p5.color('white')
    airColorsArray = [
      // [color("#FFFFFF"),color("rgb(0,101,0)")],
      // [color("#FFFFFF"),color("rgb(80,0,40)")],
      [p5.color('black'), p5.color('black')],
      // [color("#FFFFFF"),color("#FFFFFF")],
    ]
    for (let i = 0; i < airColorsArray[currentColorIndex].length; i++) {
      airColors.push(airColorsArray[currentColorIndex][i])
    }
    centerLine = new CenterLine(new Vector())
    shapes.push(centerLine)
    for (let i = 0; i < 50; i++) {
      let pos = Vector.random3D().mult(spaceRange)
      i % 2 == 0 ? new Circle(pos) : new Quad(pos)
    }
  }

  const draw: SketchProps['draw'] = (p5) => {
    mouse.set(p5.mouseX - center.x, p5.mouseY - center.y)
    // angle -= radians(0.5);
    // angle = radians(mouse.x/2);
    CamTarget.x = p5.radians((mouse.y * 0.4) / globalRatio)
    CamTarget.y = p5.radians((mouse.x * 0.4) / globalRatio)
    Cam.lerp(CamTarget, 0.05)
    p5.translate(center.x, center.y)
    p5.background(airColors[airColors.length - 1])
    for (let s of shapes) s.update()
    shapes.sort(function (a, b) {
      return a.dpos.z - b.dpos.z
    })
    for (let s of shapes) s.displayToWorld()
    p5.fill(textColor)
    let fh = p5.width * 0.098
  }

  const windowResized: SketchProps['windowResized'] = (p5) => {
    const parent = document.querySelector('div[data-testid="react-p5"]')
    p5.resizeCanvas(parent.clientWidth, parent.clientHeight)
    init(p5)
  }

  const init = (p5) => {
    center = new Vector(p5.width * 0.5, p5.height * 0.5)
    globalRatio = p5.dist(0, 0, p5.width, p5.height) / 800
    spaceRange = 150 * globalRatio
  }

  return {
    setup,
    draw,
    windowResized,
  }
})()

export const Graphic = () => {
  const { setup, draw, windowResized } = p5Script

  return (
    <>
      {typeof window !== 'undefined' && (
        <Sketch
          className="absolute top-0 z-30 h-screen w-screen"
          setup={setup}
          draw={draw}
          windowResized={windowResized}
        />
      )}
    </>
  )
}
