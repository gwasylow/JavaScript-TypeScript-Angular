//'use strict'

/***************************************/
//Simple namespace
var SimpleNamespace = { };

/***************************************/
//Normal namespace
var LogicNamespace = {
    foo: function(){
        console.log("Foo func executed."); 
    },
    bar: function(){
        console.log("Bar func executed.");
    }
};

LogicNamespace.foo();

/***************************************/
//Modern JavaScript namespace
//Create root namespace and make sure it's not overwritten
var BusinessLogicNamespace = BusinessLogicNamespace || {};

//vs regular 'old version'
var SecondBusinessLogicNamespace = {};
if(typeof(SecondBusinessLogicNamespace) == "undefined") {
    var SecondBusinessLogicNamespace = {};
}

//**********************************/
//proper namespace example(modern)
var MyAppNamespace = MyAppNamespace || {};
MyAppNamespace = {
    foo1: function(){
        console.log("Foo1 executed.");
    }
};
MyAppNamespace.bar1 = function() {
    console.log("Bar1 executed.");
}


MyAppNamespace.foo1();
MyAppNamespace.bar1();


//******************************/
//interesting example
var MyNamespace = MyNamespace || {};
MyNamespace.foo = {     //pseudo-subclass
    ToAlert: "test"     //property
};
MyNamespace.bar = function(arg){
    alert(arg);
};

//with: no need to provide the full namespace all time
with (MyNamespace){
    bar(foo.ToAlert);
}

//no-with execution
MyNamespace.bar(MyNamespace.foo.ToAlert);




