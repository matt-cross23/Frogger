// Grab canvas on DOM
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const frog = new Image();
frog.src = "frogger.png";
const sx = 50;
const sy = 75;
const sWidth = 800;
const sHeight = 700;
const x = 50;
const y = 444;
const width = 35;
const height = 30;

const rightPressed = false;
const leftPressed = false;
const upPressed = false;
const downPressed = false;
let up = true;
const down = true;
const right = true;
const left = true;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) 
{
  if(e.keyCode == 39){rightPressed = true;}
  if(e.keyCode == 37){leftPressed = true;}
  if(e.keyCode == 38){upPressed = true;}
  if(e.keyCode == 40){downPressed = true;}
}

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
function drawFrog() {
  context.drawImage(frog, sx, sy, sWidth, sHeight, x, y, width, height);
}

function draw() {
  // Calls canvas function
  drawBackground();
    // Recursive function that executes itself every refresh, a frog is drawn
  drawFrog();
  if (upPressed==true && up==true){
    y = y - 44;
    up = false;
  }
  if (upPressed==false){
    up = true;
  }
  // Tells browser that an animation is happening and redraws background
  requestAnimationFrame(draw);
}
draw();
