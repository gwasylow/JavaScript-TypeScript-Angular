'use strict'

//Call funciton from event
function MyButton_Click(arg0)
{
    alert('Event przechwycony' + arg0);
}

//Create event in JavaScript and assign to DOM control
document.getElementById("js-button").addEventListener("click", e => alert("Klikniety"));

