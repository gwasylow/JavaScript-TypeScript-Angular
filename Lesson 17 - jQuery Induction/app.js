'use strict'

$(document).ready(function () {    
    //1 - Accessing DOM element by ID
    $('#myText').val("Hello world 1");
    //2 - Accessing DOM element by CSS Class Name
    $('.myButton').html("Modified by JQuery");

    //Input event handling
    $('.myButton').click(function () {
        $('#myText').hide('slow');
		//3 - Accessing by tag name
        $('body').append('<div>Hello world</div>').hide('slow');
    });
});

//is similar to:
var t = window.document.getElementById('myText');
t.value = "Hello World 2";