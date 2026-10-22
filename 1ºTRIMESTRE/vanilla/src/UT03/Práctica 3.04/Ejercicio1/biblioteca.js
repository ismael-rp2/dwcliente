"use strict";

const nombres = ["Ismael", "Mar", "Antonio", "Ana", "Esperanza", "Zeta"];




//Imprimir el array;
const imprimirArray = (lista) => {
    lista.map((valor, indice, array) => {
        console.log(`${indice+1}.- ${valor}`);
    });
};


//Comprobacion del array
const comprobacion = (lista) => {
    if(!Array.isArray(lista) || lista.length === 0){
        console.log(`ERROR - Se debe recibir un objeto ARRAY, zoquete.`);
        return;
    }
    return lista;
};


const nombresMayuscula = (lista) => {
    if(!Array.isArray(lista) || lista.length === 0){
        console.log(`ERROR - Se debe recibir un objeto ARRAY, zoquete.`);
        return;
    }

    const listaEnMayusculas = lista.map((valor, indice, array)=> valor.toUpperCase());
    imprimirArray(listaEnMayusculas);
};


const nombresOrdenadorReves = (lista) => {
    // 1. Validación (para evitar errores si pasan algo que no es un array)
    if (!Array.isArray(lista) || lista.length === 0) {
        console.log(`ERROR - Se debe recibir un objeto ARRAY, zoquete.`);
        return;
    }

    // 2. Corregido: Usamos [...lista] para no romper el array original, y cambiamos .short por .sort()
    const nombresAlfabeticamente = [...lista].sort();

    // 3. Poner el orden alfabético al revés
    const listaReves = nombresAlfabeticamente.reverse();
    
    imprimirArray(listaReves);
};


const objetoJSON = (lista) => {
// 1. Validación (para evitar errores si pasan algo que no es un array)
    if (!Array.isArray(lista) || lista.length === 0) {
        console.log(`ERROR - Se debe recibir un objeto ARRAY, zoquete.`);
        return;
    }

    const arrayObjetos = lista.map((valor,indice, array) => {
        return {
            id: indice,
            nombres: valor
        };
    });

    const imprimrObjeto = arrayObjetos.map((valor, indice, array) => {
        console.log(`ID: ${indice} | Nombre: ${valor}`);
    });
};



export {nombresMayuscula, nombresOrdenadorReves, objetoJSON, imprimirArray, nombres};