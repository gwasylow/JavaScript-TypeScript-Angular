import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}


//Main differences between Pure JS and TS

/****************************************** */
//1.0 Strongly yped language  -> TS
//oldjs function
function foo1(person) {
  return "Hi " + person;
}

//TS version
function foo2(person : string) {
  return "Hi " + person;
}

/****************************************** */
//2.0 Classes
//oldjs - anonymous class syntax
//inheritance in oldjs was terrible (prototyping)
var TestAnonymousClass = {
};

//TS
class TestClass {
}

//2.1 Inheritance + Access Modifiers + Polimorphism
class Animal{
  public Name : string; //if it was not specified its public
  private Age : number; //not accessible outside of the class
  protected Child : string; //this field cannot be initialized outside of the class
  readonly Creator : string; //properties initialized only once

  constructor(name : string){  //czytaj constructor: parameters-name as string
  this.Name = name;
  this.Child = "xxx"
  this.Creator = "Andziej";
  }

  public Moooo(voice : string) : void{
    console.log(voice);
  }
}

class Snake extends Animal{
  constructor(name : string){
    super(name); //super- to call the constructor from the main class /sends information to main class
  }
}

class Horse extends Animal{
  constructor(name : string){
    super(name);
  }
}

var CobraSnake : Snake = new Snake("Name of Cobra");
var ArabianSnake : Horse = new Horse("Name of ArabianSnake");
var BlackHorse : Animal = new Horse("Name of Animal");

CobraSnake.Moooo("Ssssss");
ArabianSnake.Moooo("Pffffff");
BlackHorse.Moooo("Prrrrr");


//2.2 Accessors - TS supports get, set
class Car{
  private _BrandName : string;

  get BrandNameProp() : string
  {
    return this._BrandName;
  }

  set BrandNameProp(name : string) {
    this._BrandName = name;
  }
}

let BMW : Car = new Car();
BMW.BrandNameProp = "X5";
console.log(BMW.BrandNameProp);

//2.3 Abstract classes - ready for inheritance, cannot create objects
abstract class Vehicle{
  abstract Drive() : void;
  Stop() : void{
    console.log("Vehicle stopped");
  }
}

class Bike extends Vehicle{
//abstract method
  Drive() : void{
    console.log("I want to ride my bicycle");
  }
//virtual method
  Stop() : void{
    console.log("Bike stopped");
    super.Stop(); 
  }
}

//2.4 Multiple inheritance performed by the interfaces
interface IColorable{ //use I-prefix for interface
  Colorise(colNum : number) : void;
}

interface ICountable{
  Count: number; //contains a field
}

//interface ICountableColorable extends IColorable, ICountable{};

class AndzejColors implements IColorable, ICountable{
  public Colorise(colNum : number) : void{
  console.log("Colorizing started");
  }
  public Count : number;
}


/****************************************** */
//3.0 Interfaces
//oldjs - not supported

//TS
interface IPerson{
  FirstName : string;
  Age : number;
}

function foo3(person : IPerson){
  return "Name: " + person.FirstName + "; Age: " + person.Age;
}


/****************************************** */
//4.0 Lambda functions/expressions
//Lambda referenced to an object (Lambda/Typed Function)(can be referenced by MyFoo)
let MyFoo : (inputParam1 : number, inputParam2 : number) => number = function(x : number, y : number) : number {
  return x * y; // foo function with 2 parameters and we assigned a Lambda function to it
}

//regular Lambda expression (inline function)
let MyLambda = function(x : number, y : number) : number {
  return x * y;
}

console.log(MyFoo(2,3));
console.log(MyLambda(2,3));

console.log(MyFoo(4,5));
console.log(MyLambda(4,5));

//4.1 Default parameters
function foo4(param1 : number, param2? : string); //declaration /?- param2 can be provided but is not required/ may or may not provide
function foo4(param1 : number, param2 = "test"){} //implementation + default value
foo4(5);
foo4(5, "ala");

/****************************************** */
//5.0 TypeScript types

let myBool : boolean = false;
let myNum : number = 9;
let myHex : number = 0xf00d;
let myBin : number = 0b1010;
let myString : string = "hello";
let mySecondString : string = `hello ${myString}` + `world`;
let myArray : number[] = [1,2,3];
let myGenericArray : Array<number> = [1,2,3];
//enumable val
enum myEnum{red, green, blue};
let myColor : myEnum = myEnum.blue;
let myAnyVal : any = null;
function foo5() : void{console.log("void method")}; //not going to return anything to the compiler
let myVoidVariableNotUseful : void = null; //or undefined - no other possibilities
//let myUndefined : undefined;
//type of never- function that returns a never type must have unreachable end-point
//represents the type of a value that never occures
function infiniteLoop() : never{
  while(true){
  }
}

//5.1 Assertions

let myAnyValue : any = "Ala ma kota";
let strLength : number = (<string>myAnyValue).length; //example no 1
let strLength2 : number = (myAnyValue as string).length //example no 1


/****************************************** */
//6.0 TS Generics
//close to be Generic function
function Calc1(param : any) : any{
  return param;
}

//full Generic function
function Calc2<T>(param: T) : T{ // we are going to use a T template
  return param;
}

let resultOfGenericFunction1 : number = Calc2<number>(3);
let resultOfGenericFunction2 : string = Calc2<string>("3");
let resultOfGenericFunction3 : Animal = Calc2<Animal>(new Animal("Arrrr"));

//Generic restrictions
function GenericArrayRestricted<T>(param : T[]) : T[]{
  return param;
}

//restriction to a custom type/method
interface IExample<T>{ //we created an interface that contains: vv
  (arg : T) : T; //definition for generic method
}

function GenericTypedFunction<T>(arg : T) : T{
  return arg;
}

let myRestrictedVar : IExample<Animal> = GenericTypedFunction; // let will be an instance of Animal


//6.1 Generic Classes
//
class MyGenericClass<T> {
  public Add: (param1 : T, param2 : T) => T; //lambda
  public Add2(param1 : T, param2 : T) : T{ //method
    let result = param1 && param2;
    console.log(result);
    return result;
  }
}

let myVarObjectTest = new MyGenericClass<any>();
let temp = myVarObjectTest.Add2(1 , 3);
let a : string = "ala ma kota";
let temp2 = myVarObjectTest.Add2(a , 666);

let myVarObject = new MyGenericClass<number>();
myVarObject.Add = function(x , y){return x * y};
let returnedValue = myVarObject.Add(5 , 5);


//6.2 Generic Classes - Interface Restriction
interface ITelephone{
  MobileNumber : string;
}

class Nokia implements ITelephone{
  public MobileNumber : string;
  constructor(){
    this.MobileNumber = "Nokia"
  }
}

class Samsung implements ITelephone{
  public MobileNumber : string;
  constructor(){
    this.MobileNumber = "Samsung"
  }
}

class Huawei{
  public MobileNumber : string;
  constructor(){
    this.MobileNumber = "Huawei"
  }
}

//Notes
//1. allows generic function to have an access to a constraint (MobileNumber property)
//2. be aware of the fact that Huawei class doesn't implement ITelephone interface, but as long as the
//property has the same definition as in other classes that implements an interface,the code will work (against the rules)
function CheckMyMobile<T extends ITelephone>(param : T) : T{
  console.log(param.MobileNumber)
  return param;
}

let Phone1 : Nokia = new Nokia();
let Phone2 : Samsung = new Samsung();
let Phone3 : Huawei = new Huawei();

let P1 = CheckMyMobile<Nokia>(Phone1);
let P2 = CheckMyMobile<Samsung>(Phone2);
let P3 = CheckMyMobile<Huawei>(Phone3); //won't work


//6.3 Generic Constraints for parameters
function GetPoint<T , K extends keyof T>(param1 : T, param2 : K) : void{ //extends keyof T blocks: Argument of type '"cat"' is not assignable to parameter of type '"a" | "b" | "c"'
  console.log("Object: " + param1 + "; Key: " + param2);
}

let points = {a : 1, b : 2, c : 3};
GetPoint(points, "a");//ok
GetPoint(points, "b");//ok
//GetPoint(points, "cat");//error - because K param extends from T param


//6.4 Generic Constraints for classes
abstract class Machine{
}

class IceMachine extends Machine{
}

class ColaMachine extends Machine{
}

class Box{ //bad practice
}

function CreateMachineInstance<T>(c : {new () : T}) : T{
  console.log('Starting the machine...');
  return new c;
}

//execute 
//CreateMachineInstance(Machine);//impossible - Cannot assign an abstract constructor type to a non-abstract constructor type.
CreateMachineInstance(IceMachine);
CreateMachineInstance(ColaMachine);
CreateMachineInstance(Box);// as long as the definition of class is similar to Machine - code is valid


/****************************************** */
//7.0 TS Iterators
//similar iteration as in JS, but strongly typed

//7.1 for ... of
let yourArray : Array<any> = [1 , "two", false];

for(let elem of yourArray){//iteration through values
  console.log(elem);
}

//7.2 for ... in
for(let elem in yourArray){//iteretion through keys
  console.log(elem);
}



/****************************************** */
//8.0 TS Modules + Namespace
//namespace is an internal module
//module is an external module
//modules are executed within their own scope / not in the global scope
//which means all variables created in a module are not visible outside of the module
//modules are declarative-
//we may create the relationship between modules which are reflected by import and export

//CommonJS or RequireJS - libraries used for module loading in JS frameworks


//8.1 Export as a declaration
export interface ITrainingValidation{
  Approved(name: string): boolean;
}

export class AngularTraining implements ITrainingValidation{
  Approved(name: string) {
    return true;
  }
}


//8.2 Export modes

//if we add export declaration before 
//interface / class then its going to be accessible via import in external files
export interface ITrainingValidation{
  Approved(name: string): boolean;
}

class AngularTraining implements ITrainingValidation{
  Approved(name: string) {
    return true;
  }
}

//export class with visible namespace called AngularTraining
export { AngularTraining };

//export with namespace selection
export { AngularTraining as MyDreamAppAngularTraining };

//re-export - please dont use .ts extensions
export { AngularTraining as MyDreamAppAngularTrainingTest } from "./fakefile";

//export using a wildcard(*) (load all modules at once)
export * from "@angular/MyFakeFolderWithModules";



//8.3 Importing modules
import { AngularTraining } from "./AngularTraining";
let newTraining = new AngularTraining();

//import module with rename option
import { AngularTraining as XTraining } from "./AngularTraining";
let newTrainingObject = new XTraining();

//import entire module into a single variable
import * as YTrainings from "./AngularTraining";
let newTrainingObjectLoadedFromSingleModule = new YTrainings.JSTraining();




//8.4 Ambient modules
//This file should be named MyDreamAppModules.d.ts
declare module "MyDreamAppModules" {
  export interface X { }
  export function Y(a?: number): boolean; //?- nullable
  export var MyVariable: string;
}

//
import * as MyModules from "MyDreamAppModules";


//8.5 Namespacing
namespace Validation{
  export class NumberValidator{
    Validate(n?: number): boolean{
      return false;
    }
  }
}

let myNumValidator = new Validation.NumberValidator();


//8.6 Aliases - Namespacing
namespace Shape{
  export namespace Polygons{
    export class Circle{ }
    export class Square{ }
    export class Triangle{ }
  }
}

import AliasedPolygons = Shape.Polygons;
let circleObject = new AliasedPolygons.Circle();
