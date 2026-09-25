"use strict";

/**
 * Calcula la media aritmética de una cantidad indefinida de números.
 * Valida que todos sean enteros positivos o cero.
 * 
 * @returns {void} Muestra el resultado por consola.
 */
// Usamos una función anónima clásica, ¡no una función flecha!
const calcularMediaAritmetica = function () {
    let suma = 0;
    
    // Haz un bucle 'for' que recorra el pseudoarray 'arguments'
    for(let i = 0; i < arguments.length; i++){
        // Dentro del bucle, guarda el valor actual en una variable
        let numeroActual = arguments[i];
        
        let entero = Number.isInteger(numeroActual);
        // Comprueba si 'numeroActual' es entero Y (&&) si es mayor o igual a cero.
        if(entero && numeroActual >= 0){
            suma += numeroActual;
        } else {
            console.error(`ERROR DE ISMAEL :) - El valor '${numeroActual}' no es válido.`);
            return;
        }
    }    
        
    console.log(`La suma total es: ${suma}
        Cantidad de numeros: ${arguments.length} 
                ${suma} / ${arguments.length} = ${suma/arguments.length}`)    
};

export { calcularMediaAritmetica };