"use strict";

/**
 * Función base del Ejercicio 1 (Reutilizada).
 * Comprueba si un array plano de 9 números tiene algún repetido.
 * @param {Array} arrayPlano - Array de 9 números.
 * @returns {Boolean} true si hay repetidos, false si son únicos.
 */
const tieneRepetidos = (arrayPlano) => {
    return arrayPlano.some((valor, indice, array) => {
        // Ignoramos los ceros o espacios vacíos si el sudoku estuviera sin terminar,
        // aunque el ejercicio asume que comprobamos una solución completa.
        return array.indexOf(valor) !== array.lastIndexOf(valor);
    });
};

/**
 * Extrae una columna entera de un array bidimensional.
 * @param {Array} sudoku - El tablero 9x9.
 * @param {Number} indiceColumna - El número de columna a extraer (0-8).
 * @returns {Array} Array plano con los 9 números de esa columna.
 */
const obtenerColumna = (sudoku, indiceColumna) => {
    // Usamos map para coger un elemento específico de cada fila
    return sudoku.map((fila) => fila[indiceColumna]);
};

/**
 * Extrae un bloque de 3x3 y lo aplana a un array de 9 números.
 * @param {Array} sudoku - El tablero 9x9.
 * @param {Number} filaInicio - Índice donde empieza el bloque (0, 3 o 6).
 * @param {Number} colInicio - Índice donde empieza el bloque (0, 3 o 6).
 * @returns {Array} Array plano con los 9 números del bloque.
 */
const obtenerBloquePlano = (sudoku, filaInicio, colInicio) => {
    // 1. Cortamos las 3 filas correspondientes con .slice()
    const filasBloque = sudoku.slice(filaInicio, filaInicio + 3);
    
    // 2. De cada fila, cortamos las 3 columnas correspondientes
    const bloque3x3 = filasBloque.map((fila) => fila.slice(colInicio, colInicio + 3));
    
    // 3. Aplanamos el resultado usando el Spread Operator
    return [...bloque3x3[0], ...bloque3x3[1], ...bloque3x3[2]];
};

/**
 * EJERCICIO 3: Validador principal del Sudoku.
 * @param {Array} sudoku - El tablero bidimensional 9x9.
 * @returns {Boolean} true si el sudoku es correcto, false si tiene fallos.
 */
const comprobarSudoku = (sudoku) => {
    // Validamos que nos pasen un array
    if (!Array.isArray(sudoku) || sudoku.length !== 9) {
        console.error("ERROR - Tablero Sudoku inválido.");
        return false;
    }

    // 1. COMPROBAR FILAS
    // Si 'some' fila tiene repetidos, devolverá true (filasInvalidas = true)
    const filasInvalidas = sudoku.some((fila) => tieneRepetidos(fila));
    if (filasInvalidas) return false;

    // 2. COMPROBAR COLUMNAS
    // Creamos un array del 0 al 8 para iterar sobre los índices de las columnas
    const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const columnasInvalidas = indices.some((indice) => {
        const columnaActual = obtenerColumna(sudoku, indice);
        return tieneRepetidos(columnaActual);
    });
    if (columnasInvalidas) return false;

    // 3. COMPROBAR BLOQUES 3x3
    // Los bloques empiezan en los índices 0, 3 y 6
    const arranques = [0, 3, 6];
    
    // Usamos some anidado para recorrer la cuadrícula de bloques
    const bloquesInvalidos = arranques.some((filaInicio) => {
        return arranques.some((colInicio) => {
            const bloque = obtenerBloquePlano(sudoku, filaInicio, colInicio);
            return tieneRepetidos(bloque);
        });
    });
    if (bloquesInvalidos) return false;

    // Si ha sobrevivido a todas las pruebas (sin devolver false), ¡el Sudoku es perfecto!
    return true; 
};

export { comprobarSudoku };