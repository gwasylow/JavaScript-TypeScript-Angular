'use strict'

var c = document.getElementById("jsCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
var horizontalCoord = 0, verticalCoord = 0, horizontalDirFactor = 1, verticalDirFactor = 1, collisionFactor;

setInterval(function()
{
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.arc(horizontalCoord,y,40,0,2*Math.PI);

    if (horizontalCoord >= 400 || horizontalCoord < 0)
		horizontalDirFactor *= -1;
    
    if (verticalCoord >= 400 || verticalCoord < 0)
		verticalDirFactor *= -1;
        
    horizontalCoord += 3 * horizontalDirFactor;
    verticalCoord += 5 * verticalDirFactor;
	
    console.log(`Aktualne polozenie: x = ${horizontalCoord}, y = ${verticalDirFactor}`);
    //paint on canvas
	ctx.stroke();
}, 50);



