"use strict";

/**
 * Función callback: Imprime la tabla de multiplicar de un número.
 * @param {Number} numero - El número del que imprimir la tabla.
 */
const imprimirTabla = (numero) => {
    console.log(`\n--- TABLA DEL ${numero} ---`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
};

/**
 * Imprime las tablas de multiplicar hacia atrás desde un número dado.
 * 
 * @param {Number} numeroInicio - Número desde el que empezar (entero > 2).
 * @param {Function} callbackMultiplicar - Función para imprimir cada tabla.
 */
const tablas = (numeroInicio, callbackMultiplicar) => {
    // 1. Cláusula de guarda: Validación estricta
    if (typeof numeroInicio !== 'number' || !Number.isInteger(numeroInicio) || numeroInicio <= 2) {
        console.error("ERROR - El parámetro debe ser un número entero positivo mayor que dos.");
        return;
    }
    
    // 2. Cláusula de guarda: Validar que el segundo parámetro es una función
    if (typeof callbackMultiplicar !== 'function') {
         console.error("ERROR - El segundo parámetro debe ser una función.");
         return;
    }

    // Lógica: Bucle hacia atrás hasta el 2 (incluido)
    let contador = numeroInicio;
    while (contador >= 2) {
        // Ejecutamos la función pasada por parámetro
        callbackMultiplicar(contador);
        contador--;
    }
};

export { tablas, imprimirTabla };
