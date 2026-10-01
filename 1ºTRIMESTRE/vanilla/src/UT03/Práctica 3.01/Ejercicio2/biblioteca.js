"use strict";


/**
 * Imprimir la tabla de multiplicar de cada número
 * @param {Number} numero El número de tablas de multiplicar 
 */
const multiplicar = (numero) => {
    console.log(`\n--- TABLA DEL ${numero} ---`);
    for (let i = 1; i <= 10; i++) {
        console.log(`\n${numero} x ${i} = ${numero * i}`);
    }
}


/**
 * Verificación de número válido y llamada a la función multiplicar
 * hasta que el número sea igual a 2.
 * @param {Number} numeroInicio La tabla del numero donde se comienza
 * @param {Function} multiplicar Imprimir la función correctamente
 * @returns Las tablas hasta el 2
 */
const tablas = (numeroInicio, multiplicar) => {
    // Verificación de número váido
    if (!Number.isInteger(numeroInicio) || numeroInicio <= 2) {
        console.error("ERROR - Introduce un número entero positivo mayor a dos.");
    }

    for (let i = numeroInicio; i >= 2; i--) { // Bucle hacia atrás hasta llegar al número 2.
        multiplicar(i);
    }
};

export {tablas, multiplicar};
