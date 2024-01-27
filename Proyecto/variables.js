var elementoOficina=["computadoras","celular","3","true"];

// console.log(elementoOficina);

var adsi={
    ficha1:"323", nombreAlumnos:87, cedula: "rojo",
    ficha2:"324", modelo:77, color: "verde"
}

// console.log(adsi);

var nombreCursAlumnosoAdsi = "valor" ;// camell Case = camello

//operadores de asignacion

" = " 

var a = 10000;
var b = a;
//console.log(b);
//console.log("el valor del parqueadero es : ",b);
//console.log('su pago es \n 10000 ');

/*
secuencias scape
*****************
Codigo  Resultado
\'      Comillas simples
\"      Comillas Dobles
\\      Barra invertida
\n      Linea nueva
\r      Retorno carro
\t      Tabulacion
\b      Retroceso
\f      Salto de pagina
*/

// = , A == a, A === a;  asignacion sencilla, debe ser igual a ; totalmente igual en todo
// = // inicializacion de variables 

var suma = 3 + 2;
var Resultado = 0;

//console.log(suma);
//console.log(Resultado);

var nueva = suma;
//console.log(nueva);

var resta = nueva -15;
//console.log(resta);

// incrementar y decrementar
// +1 , ++ == incremnetar en 1
// -1 , -- == decrementa en 1

var pollos = 50;
var pollos = pollos +5;
// console.log(pollos);
var a = 0;          // si no la inicializo me toma el valor anterior
var a = a + 10; 
a += 10 ;           // Incremento en 10
console.log(a);
a -= 5 ;            // Decremento en 5
console.log(a);
a *= 5 ;            
console.log(a);
a /= 3 ;
console.log(a);

// Accediendo a los string

var miCadena;
miCadena = "ELAINE LISETH LEAL SANCHEZ ";
console.log(miCadena.length); // contando los espacios
console.log(miCadena[0]);     // Accedo a primer index
console.log(miCadena[7]);     // Accedo al septimo index
console.log(miCadena[14]);
console.log(miCadena[19]);

console.log(miCadena[miCadena.length-1]);
console.log(miCadena[miCadena.length-2]);

// Ejercicio Practico

/* 
En una fabrica de lacteos se obtuvo la medida de que por cada 7 litros de leche,
se obtiene 2 1/4 de Crema.

¿Cuantos litros de leche se requieren para producir 1 3/4 de Crema?

2 1/4 = (4 * 2 + 1 ) / 4 = 9/4.
1 3/4 = (4 * 1 + 3 ) / 4 = 7/4.
*/

var Litros = 7;
var Crema = 9/4 ;

var calculo = (7 * (7/4)) / (9/4);
console.log("Se requieren ", calculo, "Litros de Leche para producir 1 3/4 de crema.");

/*
Un Automovil recorre 180Km en 2 horas.
¿Cuantos Kilometros habra recorrido en 5 Horas?
¿Cuanto tiempo durara en recorrer 327Km ?
*/
var kmRecorridos = 180;
var horas = 2;

var calculoKilometros = (180 * 5) / 2 ;
var calculoHorasRecorridas = (327 * 2) / 180 ;

console.log("Los kilometros recorridos en 5 horas son ",calculoKilometros, "Kilometros");
console.log("El tiempo que duro recorriendo 327Km es ",calculoHorasRecorridas, "Horas");

