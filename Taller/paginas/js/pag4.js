function promedioNotas() {
  var nombre = document.getElementById("nombre").value;
  var materia = document.getElementById("materia").value;
  var nota1 = parseFloat(document.getElementById("nota1").value);//convierte los numeros a decimales
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);

  //validaciones
  if (nombre.length === 0) {
    alert("Ingrese su nombre para continuar");
    return;

  }
  if (materia.length === 0) {
    alert("Ingrese la materia para continuar");
    return;

  }
  if (isNaN(nota1) || nota1 < 0 || nota1 > 5) {   // isNaN es para validar que sean numeros
    alert("Ingrese una nota válida entre 0 y 5");
    return;

  }
  if (isNaN(nota2) || nota2 < 0 || nota2 > 5) {
    alert("Ingrese una nota válida entre 0 y 5");
    return;

  }
  if (isNaN(nota3) || nota3 < 0 || nota3 > 5) {
    alert("Ingrese una nota válida entre 0 y 5");
    return;

  }


  // acaban validaciones
  const numeros = [nota1, nota2, nota3]; // Array con los números a promediar
  const total = numeros.reduce((acc, val) => acc + val, 0); // obtiene la suma total de los elementos en el array 'numeros'

  const promedio = total / numeros.length; // Dividir la suma por el número total de elementos

  if (promedio >= 3.0) {
    document.getElementById("Prom").innerHTML = "Felicitaciones  " + nombre + " <span style='color: blue'> su nota es " + promedio.toFixed(2) + "</span> Pasaste la materia: " + materia;
  } else {
    document.getElementById("Prom").innerHTML = "Lo siento  " + nombre + "<span style='color: red'> su nota es " + promedio.toFixed(2) + "</span> No pasaste la materia: " + materia;
  }
}
// toFixed es para redondear hacia el numero de decimales que se quiere