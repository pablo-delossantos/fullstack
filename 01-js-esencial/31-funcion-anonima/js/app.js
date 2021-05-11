'use strict'

// Función anónima

/*(
  function(){
    var mensaje = "Hola de nuevo";
    console.log(mensaje);
  }
)()*/

var saludar = function(nombre){
  var mensaje = 'Hola ' + nombre;
  return mensaje;
}
//Esta es una manera común de escribir funciones anónimas