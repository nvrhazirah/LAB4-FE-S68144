const container = document.getElementById('container');
const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
let animationInterval;

function moveSquares() {
    const max = 280; // Maximum position within the container
    const square1X = Math.floor(Math.random() * max);
    const square1Y = Math.floor(Math.random() * max);
    const square2X = Math.floor(Math.random() * max);
    const square2Y = Math.floor(Math.random() * max);

    square1.style.left = square1X + 'px';
    square1.style.top = square1Y + 'px';
    square2.style.left = square2X + 'px';
    square2.style.top = square2Y + 'px';
}

document.getElementById('startBtn').addEventListener('click', function() {
    moveSquares(); // Move squares initially

    // Start moving squares at regular intervals
    animationInterval = setInterval(moveSquares, 1000);
});

document.getElementById('stopBtn').addEventListener('click', function() {
    clearInterval(animationInterval); // Stop the animation
});
