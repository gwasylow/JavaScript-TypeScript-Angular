'use strict'

var canvas = document.getElementById("snakeGame");
var ctx = canvas.getContext("2d");
var snakeX = 50;
var snakeY = 60;
var snakeSide = 20;
var dx = 0;
var dy = 0;
var radiusCircle = 15;
var collisionCounter = 0;
var foodX = 0;
var foodY = 0;
var foodSide = 20;
var snakeCounter = 0;
//-1: off, 0: left, 1: right, 2: up, 3: down
var Directions = Object.freeze({"OFF" : -1, "LEFT" : 0, "RIGHT" : 1, "UP" : 2, "DOWN" : 3});
var direction = Directions.OFF;
var snakePosition = new Set();
snakePosition.add({'x' : snakeX, 'y' : snakeY});

setInterval(draw, 200);

function drawSnake() {
    ctx.beginPath();
    
    clearSnake();
    ctx.fillStyle = "green";
    ctx.fillRect(snakeX, snakeY, snakeSide, snakeSide);
    console.log(snakePosition);
    
    ctx.stroke();
}

function draw() {
    drawSnake();
    
    //Text
    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.clearRect(canvas.width - 125, 0, 125, 20);
    ctx.fillText("Food counter: " + snakeCounter,canvas.width - 125, 20); 
    ctx.closePath();

    //Detect food collision
    if ((snakeX + snakeSide >= foodX && snakeX <= (foodX + foodSide)) && (snakeY + snakeSide >= foodY && snakeY <= (foodY + foodSide))) {
        console.log("Food found! snakeX: " + snakeX + " snakeY: " + snakeY + " foodX: " + foodX + " foodY: " + foodY);
        snakeCounter++;
        displayFood();
    }
    
    //Detect box collision
    if (snakeX + dx + snakeSide > canvas.width || snakeX + dx < 0) {
        dx = -dx;
        //collisionCounter++;
    }
    
    if (snakeY + dy + snakeSide > canvas.height || snakeY + dy < 0) {
        dy = -dy;
        //collisionCounter++;
    }
    
    snakeX += dx;
    snakeY += dy;

    // Detect collision within snake

    //console.log('snakeX: ' + snakeX + ' snakeY: ' + snakeY);
    //snakePosition.add({'x' : snakeX, 'y' : snakeY});
}

function clearSnake() {
    ctx.clearRect(snakeX, snakeY, snakeSide, snakeSide);
}

function clearFood() {
    ctx.clearRect(foodX, foodY, foodSide, foodSide);
}

function displayFood() {
    clearFood();
    foodX = Math.floor((Math.random() * canvas.width) + 1);
    foodY = Math.floor((Math.random() * canvas.height) + 1);
    ctx.fillStyle = "blue";
    ctx.fillRect(foodX, foodY, foodSide, foodSide);
}

//Arrow Keys Control
window.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) return;
    
    switch(event.key) {
        case "ArrowDown":
            if (direction != Directions.DOWN) {
                dy = snakeSide;
                dx = 0;
                direction = Directions.DOWN;
            }
            break;
        case "ArrowUp":
            if (direction != Directions.UP) {
                dy = -snakeSide;
                dx = 0;
                direction = Directions.UP;
            }
            break;
        case "ArrowLeft":
            if (direction != Directions.LEFT) {
                dx = -snakeSide;
                dy = 0;
                direction = Directions.LEFT;
            }
            break;
        case "ArrowRight":
            if (direction != Directions.RIGHT) {
                dx = snakeSide;
                dy = 0;
                direction = Directions.RIGHT;
            }
            break;
        default:
            break;
    }
    event.preventDefault();
});

displayFood();
