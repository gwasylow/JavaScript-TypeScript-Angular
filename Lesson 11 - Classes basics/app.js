'use strict'

var myObject = {
    Name : "Stefan",
    Surname : "Kowalski",
    Print : function()
    {
        console.log(this.Name);
    }
};

//Add property
myObject.Age = 45;
//Add method
myObject.PrintDetails = function(){
    console.log(this.Name + " " + this.Age);
}

myObject.Print();
myObject.PrintDetails();



//semicalss written in function
function MySecondObjectClass(name, surname)
{
    this.Name = name;
    this.Surname = surname;
	
    this.Print = function ()
    {
        console.log(this.Name + " " + this.Surname); 
    }
}

var object1 = new MySecondObjectClass();
object1.Print();

var object2 = new MySecondObjectClass();
object2.Print();
