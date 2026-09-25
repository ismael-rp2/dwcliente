"use strict";

/**
 * Calcula la potencia de un número usando un bucle while.
 * Valida previamente que ambos parámetros sean números enteros.
 * 
 * @param {number} base - El número base.
 * @param {number} exponente - El número de veces que se multiplica la base.
 * @returns {number|string} El resultado de la potencia o un mensaje de error.
 */
const calcularPotencia = (base, exponente) => {
    // 1. Comprobamos que ambos son enteros dentro de un IF
    if (Number.isInteger(base) && Number.isInteger(exponente)) {
        
        let resultado = 1;
        let iteracion = 0;

        // 2. Usamos el while para calcular la potencia
        while (iteracion < exponente) {
            resultado = resultado * base;
            iteracion++; // Aumentamos el contador para que el bucle termine
        }
        
        return resultado;

    } else {
        return "Error: Ambos parámetros deben ser números enteros.";
    }
};

export { calcularPotencia };