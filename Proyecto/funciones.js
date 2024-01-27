
/*      Funciones
Escribir codigo para reutilizar, con solo llamar a su nombre

function nombre( parametros ) {
            (cuerpo de la funcion)
}

*/

function saludo() {
    console.log("Buen dia para todos ");
    alert("Que tengan un dia productivo !");
}
saludo();
 
function suma (a,b) {
    var suma = a+b;
    console.log("El resultado es : "+ suma);
    console.log("El resultado de sumar ", a , "+", b , "es : ",suma);
    alert(suma);
}
suma(4,6);
suma(9,20);
suma(30,987);
suma(234,543);

function concatenarTresCadenas(cadena1, cadena2, cadena3){
    console.log(cadena1 +" " + cadena2 +" " + cadena3);
}
concatenarTresCadenas("rana", "rin rin", "renacuajo");      //Concatenacion de cadenas de texto 
