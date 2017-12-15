'use strict'

var nieWiem = true;
console.log(nieWiem);

var wiem = nieWiem.toString();
console.log(wiem);
console.log(Boolean(wiem));
console.log(`Konwersja z pustego stringa ${Boolean('')}`);
console.log(`Konwersja z niepustego stringa ${Boolean("xxx")}`);
console.log(`Konwersja z liczby ${Boolean(1)}`);
console.log(`Konwersja z liczby ${Boolean(0)}`);
 