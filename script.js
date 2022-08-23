/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const btn = document.querySelector("button")

const CANVAS_WIDTH = canvas.width = 272
const CANVAS_HEIGHT = canvas.height = 160

const spriteWidth = 32
const spriteHeight = 32

let stopFrame = false
let progressBar = 0

const image = new Image()
image.src = "./assets/images/1 Pink_Monster/Pink_Monster_Run_6.png"

const backgroundLayer1 = new Image()
backgroundLayer1.src = "./assets/images/parallax-mountain-bg.png"

const backgroundLayer2 = new Image()
backgroundLayer2.src = "./assets/images/parallax-mountain-montain-far.png"

const backgroundLayer3 = new Image()
backgroundLayer3.src = "./assets/images/parallax-mountain-mountains.png"

const backgroundLayer4 = new Image()
backgroundLayer4.src = "./assets/images/parallax-mountain-trees.png"

const backgroundLayer5 = new Image()
backgroundLayer5.src = "./assets/images/parallax-mountain-foreground-trees.png"

// let progressWidth = 0;

// window.addEventListener("keydown", () => { 
  // if(progressWidth >= 500) {
  //   image.src = "./assets/images/Idle.png"
  //   return
  // }
  // let loadSpeed = Math.floor(Math.random() * 10)
  // progressWidth += loadSpeed
  // stopFrame = !stopFrame
// })

let gameFrame = 0
let staggerFrames = 5
let spriteLength = 6

let gameSpeed = 5

class Layer {
  constructor(image, speedModifier) {
    this.x = 0
    this.y = 0
    this.width = 544
    this.height = 160
    this.image = image
    this.speedModifier = speedModifier
    this.speed = gameSpeed * this.speedModifier
  }

  update(){
    this.speed = gameSpeed * this.speedModifier
    if(this.x <= -this.width){
      this.x = 0
    }
    this.x = this.x - this.speed
  }

  draw(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
  }
}

const layer1 = new Layer(backgroundLayer1, 0.05)
const layer2 = new Layer(backgroundLayer2, .1)
const layer3 = new Layer(backgroundLayer3, .15)
const layer4 = new Layer(backgroundLayer4, .3)
const layer5 = new Layer(backgroundLayer5, .5)

const backgroundObjects = [layer1, layer2, layer3, layer4, layer5]

function animate(){
  ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
  let position = Math.floor(gameFrame / staggerFrames) % spriteLength
  let frameX = spriteWidth * position

  gameFrame++
  if(progressBar >= CANVAS_WIDTH) {
    stopFrame = true
    gameFrame = 0
  } else progressBar++

  backgroundObjects.forEach(obj => {
    if(stopFrame) {
      obj.draw()
      return
    }
    obj.update()
    obj.draw()
  })

  ctx.drawImage(image,frameX,0,spriteWidth,spriteHeight,(CANVAS_WIDTH / 2) - spriteWidth,CANVAS_HEIGHT - spriteHeight, spriteWidth, spriteHeight)
  ctx.fillText(`Loading ${Math.floor(progressBar / CANVAS_WIDTH * 100)} %`, CANVAS_WIDTH / 2 - spriteWidth, 50);
  ctx.fillStyle = "yellow"
  ctx.fillRect(0,0,progressBar,5)
  requestAnimationFrame(animate)
}

animate()

/*
TODO
- Add border style
- Animated loader text
*/