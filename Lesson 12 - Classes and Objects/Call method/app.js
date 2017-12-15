'use strict'

var Employee = function() 
{
    this.ID = "780987";
}

Employee.prototype.Welcome = function() {
    console.log(this.Name + " " + this.ID + " welcomes you onboard");
}

var Manager = function(){
    Employee.call(this);
    this.Level = "high";
	
    this.Test = function()
    {
        console.log(this.ID);
    }
}

//Prototyping
Manager.prototype.Welcome = function(){
    console.log(this.Name + this.Level);
}

var emp1 = new Employee();
emp1.Welcome();

var mng1 = new Manager();
mng1.Welcome(); //expect undefined in one property
