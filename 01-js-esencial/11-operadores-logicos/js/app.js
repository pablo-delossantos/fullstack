'use strict'

// Operadores lógicos

var datoA = 10;
var datoB = 20;

// OPERADOR Y o AND - &&
var and = (datoA > 10 && datoB > 10) //¿Es datoA mayor que 10 y datoB mayor que 10?
console.log('El resultado de la evaluación AND es: '+ and);

// OPERADOR O u OR - ||
var or = (datoA > 10 || datoB > 10) //¿Es datoA mayor que 10 o datoB mayor que 10?
console.log('El resultado de la evaluación OR es: '+ or);

// OPERADOR DE NEGACIÓN o NOT - !
var not = !(datoA > 10);
console.log('El resultado de la evaluación NOT es: '+ or); //¿No es datoA mayor que 10?