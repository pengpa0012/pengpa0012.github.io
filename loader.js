/** @type {HTMLCanvasElement} */

const coverCanvas = document.querySelector(".cover")
const coverContainer = document.querySelector(".container")
const overlay = document.querySelector(".overlay")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


const CANVAS_WIDTH = canvas.width = 272
const CANVAS_HEIGHT = canvas.height = 160

const spriteWidth = 24
const spriteHeight = 24

let stopAll = false
let progressBar = 0

let gameFrame = 0
let staggerFrames = 5
let spriteLength = 24
let gameSpeed = 5

const image = new Image()
image.src = "./assets/images/DinoSprites - vita.png"

function animate(){
  ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
  let position = Math.floor(gameFrame / staggerFrames) % spriteLength
  let frameX = spriteWidth * position

  gameFrame++
  // if(progressBar >= CANVAS_WIDTH){
  //   overlay.classList.add("active")
  //   setTimeout(() => {
  //     coverCanvas.style.display = "none"
  //     coverContainer.style.display = "block"
  //   }, 500);
  // }
  // if(progressBar >= CANVAS_WIDTH || stopAll) {
  //   gameFrame = 0

  // } else progressBar++

  ctx.drawImage(image,frameX,0,spriteWidth,spriteHeight,(CANVAS_WIDTH / 2) - spriteWidth,CANVAS_HEIGHT - spriteHeight, spriteWidth, spriteHeight)
  ctx.fillText(`Loading ${Math.floor(progressBar / CANVAS_WIDTH * 100)} %`, CANVAS_WIDTH / 2 - spriteWidth, 50);
  ctx.fillStyle = "yellow"
  ctx.fillRect(0,0,progressBar,5)
  requestAnimationFrame(animate)
}

animate()

/*
TODO
- Find/Create decent loader
- Fix page transition
*/