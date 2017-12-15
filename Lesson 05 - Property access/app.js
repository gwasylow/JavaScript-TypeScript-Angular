'use strict'

//Dostep do property za pomoca identyfukatora sposob #1
var myObject = new Object();
myObject.andrzejPiesNaBaby = 'zawsze';
console.log(myObject.andrzejPiesNaBaby);

//Dostep do property za pomoca tekstu sposob #2
myObject["andrzejPiesNaBaby"] = 160;
console.log(myObject["andrzejPiesNaBaby"]); 

//Notyfikacja a'la json
var myObject2 = {
	andrzejPiesNaBaby: 'hauhau', 
	bartekTez: true
	};

console.log(myObject2.andrzejPiesNaBaby);
console.log(myObject2["andrzejPiesNaBaby"]); 