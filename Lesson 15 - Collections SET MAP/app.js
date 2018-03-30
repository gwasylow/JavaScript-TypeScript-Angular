'use strict'

//Map collection
//Store Key and value (any type)
//set() - add/replace an element set(key, value)
//get() - get element by key (key)
//has() - check is key exist
//delete() - delete by key
//clear()
//size - property


let myMap = new Map();

myMap.set(1,'Walę tynki');
myMap.set('2',45);
myMap.set(false,true);

//replace the key (if already exist)
myMap.set(1,'Tynki walę');
myMap.set('2',54);

for(let val of myMap.values()){
    console.log(val);
}

myMap.forEach((val,key,myMap) => {
    console.log(key + ': ' + val);
});






//Set collection
//Store unique elements

//add(value) - add uniqe value to collection
//delete(value)
//has(value)
//clear()
//size - property


let seta = new Set();

let obj1 = {butelka: '0,5l'};
let obj2 = {butelka: '0,7l'};
let obj3 = {butelka: '1l'};

seta.add(obj1);
seta.add(obj2);
seta.add(obj3);
seta.add(obj1);
seta.add(obj2);

for(let val of seta.values()){
    console.log(val);
}

seta.forEach((val,val2) => {
    console.log(val);
    console.log(val2);
});

