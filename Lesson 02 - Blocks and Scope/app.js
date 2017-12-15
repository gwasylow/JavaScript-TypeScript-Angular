'use strict'

var x = "du4a";
var y = 1;

function foo()
{
    {
        var y = 11;     
        console.log(y);
    }

    var z = 5;
    {
        var y = 5;
        console.log(y+z);
    }
}

foo();


