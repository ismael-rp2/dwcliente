"use strict";

/**
 * Genera un array con 10 posiciones de números aleatorios (del 1 al 10).
 * Cumple norma UT03: Uso de Spread Operator en lugar de .push() o índices.
 * @returns {Array} Un array inmutable con los números.
 */
const generarArray = () => {
    let nuevoArray = []; // Debe ser let para poder reasignarlo con el spread

    for (let i = 0; i < 10; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        // 🟢 UT03: Añadimos elementos SIN mutar el array, creando uno nuevo
        nuevoArray = [...nuevoArray, numeroAleatorio];
    }
    
    return nuevoArray;
};

/**
 * Verifica que el parámetro sea un array válido y tenga contenido.
 * @param {Array} lista - El dato a comprobar.
 * @returns {Boolean} true si es válido, false en caso contrario.
 */
const comprobarArray = (lista) => {
    // 🟢 UT03: Cláusula de guarda correcta (Responsabilidad Única)
    if (!Array.isArray(lista) || lista.length === 0) {
        return false;
    }
    return true;
};

/**
 * Imprime un array por consola debidamente formateado.
 * @param {Array} lista - El array a imprimir.
 */
const imprimirArray = (lista) => {
    if (comprobarArray(lista)) {
        // 🟢 UT03: Usamos forEach() porque SOLO queremos imprimir (no transformar)
        lista.forEach((valor, indice) => {
            console.log(`Posición: ${indice + 1} | Contenido: ${valor}`);
        });
    } else {
        console.error(`ERROR - ARRAY INVÁLIDO, ZOQUETE.`);
    }
};

/**
 * Une tres arrays, filtra los números mayores de 5 y los imprime.
 * @param {Array} lista1 - Primer array.
 * @param {Array} lista2 - Segundo array.
 * @param {Array} lista3 - Tercer array.
 */
const arrayNuevo = (lista1, lista2, lista3) => {
    
    // 1. UNIÓN (🟢 UT03: Combinación de arrays con Spread Operator)
    const arrayUnidos = [...lista1, ...lista2, ...lista3];
    
    // 2. FILTRADO (🟢 UT03: Uso correcto de .filter() para crear un nuevo array)
    const arrayFinal = arrayUnidos.filter((valor) => valor > 5);

    // 3. SALIDA
    imprimirArray(arrayFinal);
};

export { imprimirArray, generarArray, arrayNuevo };