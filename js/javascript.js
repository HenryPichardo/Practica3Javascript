// document.getElementById("mostrar").innerHTML =
// var a = 10;
// var b = 11;
// var c = a + b;

// var z = ((a == b) && (a > b));
/*     var nombre = "Roberto";
    var apellido = "De Leon";
    var nombre_apellido = "Nombre: " + nombre + "<br>" + "Apellido: " + apellido */
/*  var contador = "";
 for (let i = 0; i < 12; i++) {
     contador += i + "<br>";
 } */

// document.getElementById("mostrar").innerHTML = Math.pow(2, 2);
// var array = ["AGUACATE", "GUINEO", "NARANJA", "CHINOLA"];


/* var otroarray = new Array();
    otroarray[0] = "Maria"
    otroarray[1] = "Roberto"
 */

/* var items = "";
for (let index = 0; index < array.length; index++) {
    items += array[index] + "<br>";

} */


//var date1 = new Date();


/* debugger
var a = "texto 10";
var b = 2;
c = parseInt(a) + b;


document.getElementById("mostrar").innerHTML = c;
console.log(a); */

/* var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var resultado = (parseInt(valor1) + parseInt(valor2));
 */

/* valor1.style.color = "green";
valor2.style.background = "yellow";

valor1.style.background = "green";
valor2.style.color = "yellow"; */
// document.getElementById("resultado").value = resultado;



function miFuncion() {
    var estat = document.getElementById("estatura").value;
    var peso = document.getElementById("peso").value;

    if ((estat == 5) & (peso <= 100)) {
        document.getElementById("mostrar").innerHTML = "Usted es delgado";
    } else if ((estat == 5) & (peso <= 150) & (peso >= 101)) {
        document.getElementById("mostrar").innerHTML = "Su peso es normal";
    } else if ((estat == 5) & (peso >= 151)) {
        document.getElementById("mostrar").innerHTML = "Usted esta en sobrepeso";
    } else if ((estat == 6) & (peso <= 155)) {
        document.getElementById("mostrar").innerHTML = "Usted es delgado";
    } else if ((estat == 6) & (peso >= 156) & (peso <= 180)) {
        document.getElementById("mostrar").innerHTML = "Su peso es normal";
    } else if ((estat == 6) & (peso >= 181)) {
        document.getElementById("mostrar").innerHTML = "Usted esta en sobrepeso";
    } else {
        document.getElementById("mostrar2").innerHTML = "Introduzca una estatura y un peso valido" + "<br>" + "Recuerde que la estatura debe ser 5 o 6"
    }

}