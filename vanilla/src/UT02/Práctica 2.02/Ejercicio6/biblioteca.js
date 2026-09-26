"use strict";

// Funciones auxiliares (una tarea por función)
const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => {
    if (num2 === 0) throw new Error("No se puede dividir entre 0.");
    return num1 / num2;
};
const modulo = (num1, num2) => {
    if (num2 === 0) throw new Error("El módulo no puede calcularse con divisor 0.");
    return num1 % num2;
};

/**
 * Calculadora básica que procesa dos enteros y un operador.
 * 
 * @param {number} num1 - El primer operando entero.
 * @param {number} num2 - El segundo operando entero.
 * @param {string} operador - El símbolo de la operación (+, -, *, /, %).
 * @returns {string} El resultado de la operación formateado o un mensaje de error.
 */
const calculadora = (num1, num2, operador) => {
    // Validamos SOLO que sean enteros (pueden ser negativos)
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR: Ambos operandos deben ser números enteros.";
    }

    let resultado; // VARIABLE PARA MOSTRAR BIEN EL FORMATO

    // Ejecutamos la operación correspondiente
    switch (operador) {
        case "+": resultado = sumar(num1, num2); break;
        case "-": resultado = restar(num1, num2); break;
        case "*": resultado = multiplicar(num1, num2); break;
        case "/": 
            try {
                resultado = dividir(num1, num2);
            } catch (error) {
                return `ERROR MATH: ${error.message}`;
            }
            break;
        case "%":
            try {
                resultado = modulo(num1, num2);
            } catch (error) {
                return `ERROR MATH: ${error.message}`;
            }
            break;
        default:
            return `ERROR: Operador '${operador}' no válido.`;
    }

    // Retornamos la cadena debidamente formateada
    return `${num1} ${operador} ${num2} = ${resultado}`;
};

export { calculadora };