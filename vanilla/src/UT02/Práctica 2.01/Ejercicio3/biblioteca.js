"use strict";

/** 
 * Función para mostrar una secuencia de números multiplicados por 2.
 * @param {number} repeticiones - Cantidad de iteraciones.
 * @param {number} valorInicial - Valor por el que empezar a multiplicar.
 */
const iteracion = (repeticiones, valorInicial) => {
    let resultado = ""; // Aquí iremos acumulando el texto "6 12 24 48"
    let valorActual = valorInicial;

    for (let i = 0; i < repeticiones; i++) {
        // Concatenamos el número seguido de un espacio
        resultado += valorActual + " ";
        // Multiplicamos por 2 para que en la SIGUIENTE vuelta sea el doble
        valorActual = valorActual * 2;
    }
    
    // Mostramos la cadena completa por pantalla al salir del bucle
    console.log(resultado);
};

export { iteracion };