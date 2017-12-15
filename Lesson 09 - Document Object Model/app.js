'use strict'

var i = 0;

setInterval(function(){    
    var colorArr = new Array (
        'Blue',
        'Green',
        'Red'
	);

    let bodyDOMElement = document.getElementById("js-body"); 
    
    bodyDOMElement.style.background = colorArr[Math.floor(Math.random() * 3)];
    i++;

    let newDivElement = window.document.createElement("div");
    newDivElement.textContent = `ElementNr ${i}`;
    newDivElement.id = `js-div${i}`;

    let jsDOMContainer = window.document.getElementById("js-container");
    jsDOMContainer.appendChild(newDivElement);
}, 3000);


