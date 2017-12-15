'use strict'

document.addEventListener("keydown", (event) => 
{
    switch(event.keyCode)
    {
        case 37:
        {
            alert("left");
            break;
        }
        case 38:
        {
            alert("up");
            break;
        }
        case 39:
        {
            alert("right");
            break;
        }
        case 40:
        {
            alert("down");
            break;
        }
    }
})
