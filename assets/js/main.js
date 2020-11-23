var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operador = document.getElementById("operador");

var num1Trasformado;
var num2Trasformado;

var boton = document.getElementById("boton");
boton.addEventListener("click", calcular);
var resultado = document.getElementById("resultado");

function calcular(){
 
num1Trasformado = parseInt(num1.value)
num2Trasformado = parseInt(num2.value)

if (operador.value == "+") {
  resultado.innerHTML = Math.floor(num1Trasformado + num2Trasformado);
  
}

else if(operador.value == "-"){
  resultado.innerHTML = Math.floor(num1Trasformado - num2Trasformado);
}

else if(operador.value == "x" || operador.value == "X" ||operador.value == "*" ){
  resultado.innerHTML = Math.floor(num1Trasformado * num2Trasformado);
}

else if(operador.value == "/"){
  resultado.innerHTML = Math.floor(num1Trasformado / num2Trasformado);
}



}