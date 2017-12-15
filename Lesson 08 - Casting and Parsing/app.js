'use strict'

var nieWiem = false;
nieWiem = null;
console.log(nieWiem);

nieWiem = "false";
console.log(nieWiem);
console.log(Boolean(nieWiem));
 
console.log(null * 5);
//underfined

var x;
console.log(x);
x = 150;
console.log(x);
x = null;
console.log(parseInt(x));
console.log(x * 5);

//logika
console.log(Boolean(x));

console.log('warunki logiczne');
x = 1;

if( x != null)
{
    alert("Nie null");
}