function identificar() {
  var numeros = document.getElementById("numerosInput").value;
  if (!numeros) {
    alert("Por favor ingrese números separados por comas");
    return;
  }

  var numeros_lista = numeros.split(",");
  var pares = [];
  var impares = [];
  var dif = [];

  for (var i = 0; i < numeros_lista.length; i++) {
    var numero = parseInt(numeros_lista[i]);//identifica si cada elemento de la lista es un numero entero
    if (isNaN(numero) || numero < 0||numero % 1 !==0) {
      dif.push(numeros_lista[i]);
    } else if (numero % 2 === 0) {
      pares.push(numero);
    } else {
      impares.push(numero);
    }
  }

  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "Números pares: " + pares.join(", ") +
    "<br>" + "Números impares: " + impares.join(", ") + "<br>" +
    " No son numeros enteros: " + dif.join(", ");
}
