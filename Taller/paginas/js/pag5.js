function parOimpar() {
    var numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        alert("Ingrese un número entero positivo para continuar");
        return;
    }

    if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML = "El número " + numero + " es par";
    } else {
        document.getElementById("resultado").innerHTML = "El número " + numero + " es impar";
    }
}