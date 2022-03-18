// Grab canvas on DOM
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const frog = new Image();
frog.src = "frogger.png";
const sx = 0;
const sy = 0;
const sWidth = 40;
const sHeight = 40;
const x = 50;
const y = 444;
const width = 30;
const height = 30;

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
  drawFrog();
  // Recursive function that executes itself every refresh,
  // Tells browser that an animation is happening and redraws background
  requestAnimationFrame(draw);
}
draw();
