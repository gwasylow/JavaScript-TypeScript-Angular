'use strict'

for(var i = 0; i < 3; i++)
{
    setTimeout(() => {
        console.log('var: ' + i);
    },1000*0.1);
} 

for(let j = 0; j < 3; j++)
{
    setTimeout(() => {
        console.log('let: ' + j);
    },1000*0.1);
} 