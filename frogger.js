// Grab canvas on DOM
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const frog = new Image();
frog.src = "frogger.png";
// Dimension for frogger avatar
let sx = 50;
let sy = 75;
let sWidth = 800;
let sHeight = 700;
let x = 50;
let y = 444;
let width = 35;
let height = 30;

// Store keystrokes as not pressed until keydown event
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

// Forces player to press, then release keystroke to press again
let up = true;
let down = true;
let right = true;
let left = true;

let car = new Image(); car.src = 'Truck.png'

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// KeyDown functions attached to event handler 
function keyDownHandler(e) 
{
  if(e.keyCode == 39){rightPressed = true;}
  if(e.keyCode == 37){leftPressed = true;}
  if(e.keyCode == 38){upPressed = true;}
  if(e.keyCode == 40){downPressed = true;}
}
// KeyUp event handler functions that will run once pressed for direction keys
function keyUpHandler(e) 
{
  if(e.keyCode == 39){rightPressed = false;}
  if(e.keyCode == 37){leftPressed = false;}
  if(e.keyCode == 38){upPressed = false;}
  if(e.keyCode == 40){downPressed = false;}
}
function drawBackground() {
  // 2 Patches of Grass
  context.fillStyle = "#348C31";
  context.fillRect(0, 448, 576, 45);
  context.fillRect(0, 228, 570, 45);

  // Add street line
  context.beginPath();
  context.strokeStyle = "white";
  context.moveTo(0, 410);
  context.lineTo(570, 410);
  context.setLineDash([5]);
  context.strokeWidth = 2;
  context.stroke();

  // Add Street
  context.beginPath();
  context.moveTo(0, 315);
  context.lineTo(570, 315);
  context.strokeStyle = "white";
  context.setLineDash([5]);
  context.strokeWidth = 2;
  context.stroke();

  context.beginPath();
  context.moveTo(0, 362);
  context.lineTo(570, 362);
  context.strokeStyle = "gray";
  context.setLineDash([0]);
  context.strokeWidth = 2;
  context.stroke();

  // Water
  context.fillStyle = "#006994";
  context.fillRect(0, 0, 570, 228);
}
function moveFrog(){
if (upPressed==true && up==true){
  y = y - 44;
  up = false;
  sx = 0 
}
if (upPressed==false){
  up = true;
}
if (downPressed==true && down==true){
  y = y + 44;
  down = false;
  sx = 0 
}
if (downPressed==false){
  down = true;
}
if (rightPressed==true && right==true){
  x = x + 44;
  right = false;
  sx = 40; 
}
if (rightPressed==false){
  right = true;
}
if (leftPressed==true && left==true){
  x = x - 44;
  left = false;
  sx=80;
}
if (leftPressed==false){
  left = true;
}
}
function drawCars(){
context.drawImage(car, 0, 0, 230, 100, 150, 400, 96, 35)
}

function drawFrog() {
  context.drawImage(frog, sx, sy, sWidth, sHeight, x, y, width, height);
}

function draw() {
  context.clearRect(0,0, canvas.width, canvas.height)
  // Calls canvas function
  drawBackground();

    // Recursive function that executes itself every refresh, a frog is drawn
  drawFrog();
  // Game logic that moves frog all directions  
  moveFrog();
  drawCars();
  // Tells browser that an animation is happening and redraws background
  requestAnimationFrame(draw);
}
draw();
