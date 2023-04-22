function contarCaracteres() {
	var texto = document.getElementById("texto").value;
	if (texto.length === 0) {
		alert("Ingrese un dato para continuar");
		return;

	} else {
		var cantidadCaracteres = texto.length;
		document.getElementById("resultado").innerHTML = "El texto ingresado tiene " + cantidadCaracteres + " caracteres.";
	}
}