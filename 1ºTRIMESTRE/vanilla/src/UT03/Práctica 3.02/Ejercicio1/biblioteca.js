"use strict";

const toCani = (texto) => {
    //Verificar que es un texto    
    if(typeof texto !== 'string'){
        console.error(`Error - Debes de meter un texto`);
        return;
    }

    const letras = [...texto]; //Convertir el texto a un array de letras

    const letrasTransformadas = letras.map((valor, indice, array) => {
        let letraModificada = valor;

        //Cambiar c por k
        if(letraModificada.toLowerCase() === 'c'){
            letraModificada = 'k';
        }

        //Letras Mayusculas y Minusculas
        if(indice % 2 === 0){
            return letraModificada.toUpperCase();
        } else {
            return letraModificada.toLowerCase();
        }
    });

    const numeroHaches = Math.floor(Math.random() * 4) + 2;

    const hachesFinales = "H".repeat(numeroHaches);

    return letrasTransformadas.join("") + hachesFinales;
};

export {toCani};