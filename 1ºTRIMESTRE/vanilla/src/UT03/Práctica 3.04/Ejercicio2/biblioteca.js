"use strict";

const generarArray = () => {
    const nuevoArray = [];

    for(let i = 0; i < 10; i++){
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        nuevoArray.push(numeroAleatorio);
    }
    return nuevoArray;
};

const imprimirArray = (lista) => {
    if(!Array.isArray(lista) || lista.length < 0){
        console.error(`ERROR - ARRAY INVALIDO, ZOQUETE.`);
        return;
    }

    lista.forEach((valor, indice, array) => {
        console.log(`Posición: ${indice+1} | Contenido: ${valor}`);
    });

};

export {imprimirArray, generarArray};