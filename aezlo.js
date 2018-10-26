/** @type {HTMLCanvasElement} */
var canvas = document.getElementById("aezloCanvas");
var context = canvas.getContext("2d");

// draw space background
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);

// create a gradient for the halo
var gradient = context.createRadialGradient(canvas.width * 0.5, canvas.height * 0.5, 0, canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.48);
gradient.addColorStop(0, "springgreen");
gradient.addColorStop(1, "forestgreen");

// draw the halo
context.fillStyle = gradient;
context.beginPath();
context.arc(canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.5, 0, Math.PI * 2, false);
context.fill();

// create a gradient for the planet
gradient = context.createRadialGradient(canvas.width * 0.4, canvas.height * 0.4, 0, canvas.width * 0.4, canvas.height * 0.4, canvas.width * 0.35);
gradient.addColorStop(0, "green");
gradient.addColorStop(1, "darkgreen");

// draw the planet
context.fillStyle = gradient;
context.beginPath();
context.arc(canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.35, 0, Math.PI * 2, false);
context.fill();
