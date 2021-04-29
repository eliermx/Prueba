

/* Función para sumar */
var valor1 = null;
var valor2 = null;
var suma = null;
var resultado = null;

function muestraSuma(){
  valor1 = document.getElementById("n1").value;
  valor2 = document.getElementById("n2").value;
  suma = ( parseInt(valor1) + parseInt(valor2) );

  document.getElementById("resultado").value = suma;
}

/* Función para limpiar casillas*/

function limpiar(){
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("resultado").value = "";
}
