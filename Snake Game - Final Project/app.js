'use strict'

var c = document.getElementById("snakeGame");
var ctx = c.getContext("2d");
var tempX = 50, tempY = 50;

setInterval(drawCircle, 50);

function drawCircle(){
    
    ctx.beginPath();
    ctx.arc(tempX, tempY, 70, 0,2*Math.PI); //center x,center y,radius,?,?
    ctx.fillStyle = "red";
    ctx.fill();
    tempX += 20;
    tempY += 20;
    //ctx.clearRect(30, 30, 1500, 1500);
   // context.beginPath();
    //context.clearRect(x - radius - 1, y - radius - 1, radius * 2 + 2, radius * 2 + 2);
    //context.closePath();
}





