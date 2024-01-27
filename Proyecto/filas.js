
/*
    Proximo en Fila

En Informatica una cola (Queue) es una estructura de datos abstracta

En la cual los elementos se mentienen en orden.
Los nuevos elementos se pueden añadir al final de la cola.
Los elementos previos se retiran del principio de la cola.

Ejecutar: 
        Definir una funcion " proximoEnLaFila " 
        que tome un arreglo " arreglo " y un numero " elemento " como argumentos.
        Agregar el numero al final del arreglo y luego eliminar el primer elemento del arreglo.
        La funcion debe retornar el elemento que fue removido.
*/

function proximoEnLaFila(arreglo,elemento) {
    arreglo.push();         //Agrega elemento al final del arreglo.
    arreglo.shift();        //Extrae elemento al inicio del arreglo.
}

var arreglo = [a,b,c,d,e];

console.log("Antes : "+JSON);