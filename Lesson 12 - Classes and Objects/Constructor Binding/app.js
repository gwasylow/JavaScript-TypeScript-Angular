'use strict'

// SIMPLE CLASS INHERITANCE (prototype and call keywords)
var Employee = function(){
    this.ID = "1234";
    this.Name = "ralph";
} 

Employee.prototype.Welcome = function(){

    console.log(this.Name+ " "+this.ID + "welcomes you onboard");
}

var Manager = function(){
    Employee.call(this); // !! INHERIT  WORKS AS HIERARRCHY
    this.level = "high"; // BUT NOT AS MULTI INHERIT (YOU CAN'T HAVE more than 1 call in the class definition)

}

var Manager = function(){
    Employee.call(this); // !! INHERIT
    this.level = "high";
}


Manager.prototype.Welcome = function(){  
	console.log("Manager:" + this.Name+ " "+this.ID + this.level + "welcomes you onboard");
}
    

var emp1 = new Employee();
emp1.Welcome;

var man1 = new Manager();
man1.Welcome;




// late binding example
Cio.prototype = Object.create(MAnager.prototype);
Cio.prototype.constructor = Manager; 

var ce0 = new Ceo();
ce0.Welcome();

var Konrad = function()
{
    this.Heheszki = function(){
        console.log("hehehehe");
    }
}

Konrad.prototype.Heheszki = function(){
    console.log("Opowiada 'smieszny' kawal.");
}

Konrad.prototype.NaprawdeSmiesznyKawal = function()
{
    console.log("Zartowalem!");
}

Konrad.prototype.NaprawdeSmiesznyKawal = function()
{
    console.log("Usmialismy sie jak konie!");
}


var dzieckoKonrada = new Konrad();

dzieckoKonrada.Heheszki();
dzieckoKonrada.NaprawdeSmiesznyKawal();