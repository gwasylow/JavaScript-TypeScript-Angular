'use strict'

let user = {
    name: "John",
    sayMyName: function() {
        console.log("Hello " + this.name);
    }
};
//Problem with accessing 'this' pointer
setTimeout(user.sayMyName, 1000);

let secondUser = {
    name: "Miriam",
    sayMyName: function() {
        console.log("Hello " + this.name);
    }
};

setTimeout(secondUser.sayMyName.bind(secondUser), 1000);


let thirdUser = {
    name: "James"
};

function foo() {
    console.log("Hello " + this.name);
}
let boundFunction = foo.bind(thirdUser);
boundFunction();

function myButtonFoo(params) {
    console.log("myButtonFoo: " + params);
}

function disableControlByDOM() {
    let btn1 = document.getElementById("myButton1");
    btn1.disabled = true;
}

function genericDisableControl(control) {
    control.disabled = true;
}