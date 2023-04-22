function Divisible() {
    var numeroA = document.getElementById("numeroA").value;
    var numeroB = document.getElementById("numeroB").value;



    if (numeroA === '' || numeroB === '') {
        alert('Ingrese un número entero positivo para continuar');
        return;
    } else if (numeroA < 0 || !Number.isInteger(parseInt(numeroA))) {
        alert('El numero ' + numeroA + ' no es un entero positivo. Ingrese un numero entero positivo para continuar');
        return;
    } else if (numeroB < 0 || !Number.isInteger(parseInt(numeroB))) {
        alert('El numero ' + numeroB + ' no es un entero positivo. Ingrese un numero entero positivo para continuar');
        return;
    } else if (numeroA === '0' || numeroB === '0') {
        alert('El numero 0 no se admite para la division. Ingrese un numero entero positivo para continuar')
    }

    var division = numeroA % numeroB;
    if (division === 0) {
        document.getElementById("resultado").innerHTML = "el numero " + numeroA + " es divisible entre el numero " + numeroB;
    } else {
        document.getElementById("resultado").innerHTML = "el numero " + numeroA + " no es divisible entre el numero " + numeroB;

    }
}


