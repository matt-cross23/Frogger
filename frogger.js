// Grab canvas on DOM
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// 2 Patches of Grass
context.fillStyle = "chartreuse";
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
