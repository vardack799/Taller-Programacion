function identificarEdad() {
    var edad = document.getElementById("edad").value;
    var nombre = document.getElementById("nombre").value;

    if (nombre.length === 0) {
        alert("Ingrese su nombre para continuar");
        return;
    }

    if (edad.trim() === "" || isNaN(Number(edad))) {//.trim elimina espacios vacios 
        alert("No es una edad válida");
        return;
    } else if (edad >= 18) {
        document.getElementById("esMayor").innerHTML = "hola " + nombre + ", Eres mayor de edad ";
    } else {
        document.getElementById("esMayor").innerHTML = "hola " + nombre + ", Eres menor de edad ";
    }



}
