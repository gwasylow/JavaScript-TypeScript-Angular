'use strict'

var myString1 = "Jakis tekst";
console.log(myString1);

//Miedzy tymi zapisami sa dwie roznice - niektore moga nie dzialac w IE
//1. Zapis #2 jest brany wprost, w 1# mozna operowac znakami specjalnymi
var myString2 = 'Jakis tekst';
console.log(myString2);


//2. Zapis #2 jest interpretowany szybciej 
var m = '35';
console.log(m+2); // zwroci 352 - operator + oznacza konkatynacje oraz dodawanie z tym ze konkatynacja ma wyzszy priorytet

//formatowanie wyjscia
var out1 = `Hello World! ${m}`;
console.log(out1);
console.log(`${5*5}`);