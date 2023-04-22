function identificarTipo() {
	var valor = document.getElementById("valor").value;
	if (valor.length === 0) {
		alert("Ingrese un dato para continuar");
		return;
	} else if (!isNaN(valor)) {
		document.getElementById("resultado").innerHTML = "El valor ingresado es un numero.";
	} else {
		document.getElementById("resultado").innerHTML = "El valor ingresado es un texto.";
	}
}
