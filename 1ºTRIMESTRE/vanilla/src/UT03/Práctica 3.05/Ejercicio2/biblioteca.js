"use strict";

/**
 * Función de apoyo: Genera un array plano de 9 números únicos del 1 al 9.
 * Cumple con la regla de no usar .push() de la UT03.
 * @returns {Array} Array 1D de 9 números únicos.
 */
const generarNueveUnicos = () => {
    let numeros = [];
    
    // Mientras no tengamos los 9 números, seguimos buscando
    while (numeros.length < 9) {
        const aleatorio = Math.floor(Math.random() * 9) + 1;
        
        // Si el número no está en el array, lo añadimos creando una nueva copia
        if (!numeros.includes(aleatorio)) {
            numeros = [...numeros, aleatorio]; 
        }
    }
    
    return numeros;
};

/**
 * EJERCICIO 2.1: Crea un array bidimensional de 3x3 sin números repetidos.
 * @returns {Array} Array 2D (3x3).
 */
const generarTablero3x3 = () => {
    const numeros = generarNueveUnicos();

    // Creamos la estructura 3x3 inyectando los datos de forma inmutable.
    // .slice() extrae una porción y devuelve un array nuevo[cite: 11].
    const tablero = [
        numeros.slice(0, 3), // Posiciones 0, 1, 2
        numeros.slice(3, 6), // Posiciones 3, 4, 5
        numeros.slice(6, 9)  // Posiciones 6, 7, 8
    ];

    return tablero;
};

/**
 * EJERCICIO 2.2: Comprueba si un array bidimensional 3x3 tiene números repetidos.
 * @param {Array} tablero - El array 3x3 a evaluar.
 * @returns {Boolean} true si se repite algún número, false si son todos únicos[cite: 13].
 */
const tieneRepetidos3x3 = (tablero) => {
    // Cláusula de guarda
    if (!Array.isArray(tablero) || tablero.length === 0) {
        console.error("ERROR - Tablero 3x3 no válido.");
        return true; 
    }

    // 1. Aplanamos el array 2D a un array 1D usando el Spread Operator (...).
    // De esta forma podemos usar los métodos funcionales en un solo nivel.
    const arrayPlano = [...tablero[0], ...tablero[1], ...tablero[2]];

    // 2. Buscamos repeticiones usando .some()[cite: 11].
    // Lógica: Si el primer índice donde aparece un número (indexOf)
    // NO coincide con el último lugar donde aparece (lastIndexOf), está repetido.
    const hayRepetidos = arrayPlano.some((valor, indice, array) => {
        return array.indexOf(valor) !== array.lastIndexOf(valor);
    });

    return hayRepetidos;
};

export { generarTablero3x3, tieneRepetidos3x3 };