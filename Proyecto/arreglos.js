
/* Arreglos Sensillos

Un arreglo es una estructura de datos que permite almacenar una serie de datos.*/

var adso2826499Lista = ["Liseth","Cristian Andres","Alejandra","Camila","Carlos","Gabriel","Julian","Luis","Manuel","Marlon"];
console.log(adso2826499Lista);             //Muestra el arreglo
console.log(adso2826499Lista.length);      //Cantidad de elementos en el arreglo
console.log(adso2826499Lista[0]);          //Accede al primer elemento.


/* Arreglos Multidimencionales

Un arreglo multimencional puede contener mas arreglos en sus arreglos.*/

var adso2826499Notas = [["Liseth",9],["Cristian Andres",8],["Alejandra",5,"Fisica"],["Camila",9,"Matematicas"],["Carlos",8],["Gabriel",9],["Julian",6],["Luis",9],["Manuel",7],["Marlon",6]];

console.log(adso2826499Notas);             //Muestra el arreglo multidimencional
console.log(adso2826499Notas.length);      //Cantidad de elementos en el arreglo multidimensional
console.log(adso2826499Notas[3]);          //Accede al 4 arreglo
console.log(adso2826499Notas[0]);          //Accede al 1 arreglo

adso2826499Notas[1] = "Ron";               //Muta el 2 arreglo a elemento
console.log(adso2826499Notas);
adso2826499Notas[2] = ["Laura",10];        //Muta el 3 arreglo
console.log(adso2826499Notas);

console.log(adso2826499Notas[3][2]);       //Accede al arreglo 3 y accedemos al 2 elemento
adso2826499Notas[3][2] = "Ingles";         //Muta el 2 elemento del 3 arreglo
console.log(adso2826499Notas);

/*      Metodos 
Son funciones extras y se acceden mediante " . "

        array.metodo(argumento)

.push()       Agrega uno o varios elementos al Final del arreglo
.unshift()    Agrega uno o varios elementos al Inicio del arreglo
.pop()        Extrae el elemento del Final del arreglo
.shift()      Extrae el elemento del Inicio del arreglo

*/

var adso2826499Materias = [["Liseth","Ingles","Matematicas","Html","Fisica"],["Cristian Andres","Matematicas","Html","Fisica"],["Alejandra","Fisica","Matematicas"],["Camila","Html","Matematicas"],["Carlos","Html","Matematicas"]];
console.log(adso2826499Materias);

adso2826499Materias.push("Elicitacion");        //Agrego un elemento al final del arreglo
console.log(adso2826499Materias);

adso2826499Materias.unshift(["Juan","Matematicas","Elicitacion","Fisica"]);     //Agrego un sub-arreglo al inicio del arreglo
console.log(adso2826499Materias);

adso2826499Materias.pop();      //Extrae al final del arreglo
console.log(adso2826499Materias);

adso2826499Materias.shift();    //Extrae al inicio del arreglo
console.log(adso2826499Materias);

/*      Ejercicio Practico

Concatenar dos arrays X y Y con una Longitud de vector de 4.
se deben concatenar asi: X0,Y0,X1,Y1,X2,Y2...

*/

var arrayX = ["X0","X1","X2","X3","X4"];
var arrayY = ["Y0","Y1","Y2","Y3","Y4"];
console.log(arrayX);
console.log(arrayY);
console.log(arrayX[0],",",arrayY[0],",",arrayX[1],arrayY[1]);