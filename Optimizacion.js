/*
Encontrar el numero maximo en una lista de numeros. 
*/

function encontrarMaximo (lista) {
    let maximo = lista[0];
    for (let i = 1; i < lista.length; i++){ //El bucle for itera sobre la lista de numeros para encontrar el maximo.
        if (lista[i] > maximo){
            maximo = lista[i];              // Numero Maximo encontrado.
        }
    }
    return maximo;
};
let numeros = [5,9,2,32,11,3,8,23];
let maximoNumero = encontrarMaximo(numeros);
console.log("El numero maximo es: "+ maximoNumero);