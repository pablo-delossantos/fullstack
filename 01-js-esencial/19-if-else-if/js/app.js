'use strict'

// Condición IF

var datoA = 20;
var datoB = 20;
var resultado = "Sin datos";

if (datoA > datoB){
  resultado = "La primera condición se cumplió";
} else if (datoB == datoA) {
  resultado = "Segunda evaluación verdadera";
} else {
  resultado = "No se cumplió ninguna evaluación"
}

console.log("El resultado de la evaluación if es:", resultado);