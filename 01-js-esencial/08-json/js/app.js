'use strict'

// JSON => JavaScript Object Notation

var persona = {nombre: 'Sergio', twitter: 'yacafx'};

//Arreglo o array
var personas = [
  {nombre: 'Hugo', twitter: 'dcHugo'},
  {nombre: 'Paco', twitter: 'dcPaco'},
  {nombre: 'Luis', twitter: 'dcLuis'},
  persona
]

var personaJSON = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON);