"use strict";



/**
 * 
 * @returns {array} Un array con 10 posiciones de numeros del 1-10 
 */
const generarArray = () => {
    const nuevoArray = [];

    for(let i = 0; i < 10; i++){
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        nuevoArray[i] = numeroAleatorio;
    }
    return nuevoArray;
};


/**
 * Verificar que el array es válido. Devuelve true si es válido,
 * false si NO es válido
 * @param {*} lista 
 * @returns 
 */
const comprobarArray = (lista) => {
    if(!Array.isArray(lista) && lista.length < 0){
        return;
    }
    return lista;
};


/**
 * Imprime la lista que recibe
 * @param {*} lista 
 */
const imprimirArray = (lista) => {
    comprobarArray(lista)
        ? lista.forEach((valor, indice, array) => 
            console.log(`Posición: ${indice + 1} | Contenido: ${valor}`))
        : console.error(`ERROR - ARRAY INVALIDO, ZOQUETE.`)
    };


const recorrerArray = (lista) => {
    comprobarArray(lista)
        ? lista.map((valor, indice, array) => {
            if(valor > 5){
                arrayFinal.filter(valor => valor > 5);
            }
        })
        : console.error(`ERROR - ARRAY INVALIDO, ZOQUETE.`);
}



const arrayNuevo = (lista1, lista2, lista3) => {
    
    const arrayUnidos = [...lista1, ...lista2, ...lista3];
    const arrayFinal = recorrerArray();

    imprimirArray(arrayFinal);
};

export {imprimirArray, generarArray, arrayNuevo};