"use strict";

/**
 * 1. FUNCIÓN CALLBACK: Genera un array con números aleatorios.
 * 
 * @param {Number} cantidad - Número de elementos a generar.
 * @returns {Array} Array rellenado con números aleatorios.
 */
const generarAleatorios = (cantidad) => {
    // Cláusula de guarda: Validamos que la cantidad sea correcta
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        console.error("ERROR - La cantidad a generar debe ser un número entero mayor que 0.");
        return [];
    }

    const resultado = [];
    for (let i = 0; i < cantidad; i++) {
        // Usamos la fórmula exacta que pide el profesor en el PDF
        // (Nota: * 101 generará números del 0 al 100).
        resultado.push(Math.floor(Math.random() * 101));
    }
    
    return resultado;
};

/**
 * 2. FUNCIÓN CALLBACK: Suma las posiciones contrarias de dos arrays.
 * Ej: Posición 0 del array1 + Última posición del array2.
 * 
 * @param {Array} arr1 - Primer vector.
 * @param {Array} arr2 - Segundo vector.
 * @returns {Array|void} Array resultante de la suma o aborta si hay error.
 */
const sumarVectoresOpuestos = (arr1, arr2) => {
    // Cláusula de guarda: Comprobar que son arrays
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        console.error("ERROR - Ambos parámetros deben ser arrays.");
        return;
    }
    
    // Cláusula de guarda: Deben tener la misma longitud
    if (arr1.length !== arr2.length) {
        console.error("ERROR - Los vectores deben tener exactamente la misma longitud.");
        return;
    }

    // APLICAMOS UT03: Usamos .map() en lugar de un bucle for.
    // 'valor' es el elemento actual de arr1, 'indice' es su posición (0, 1, 2...)
    return arr1.map((valor, indice) => {
        // Calculamos la posición contraria en el arr2
        // Si la longitud es 5, y estamos en el índice 0: (5 - 1 - 0) = 4 (el último)
        const indiceContrario = arr2.length - 1 - indice;
        return valor + arr2[indiceContrario];
    });
};

/**
 * 3. FUNCIÓN CALLBACK: Imprime un array debidamente formateado.
 * 
 * @param {Array} array - El vector a imprimir.
 * @param {String} titulo - Etiqueta para saber qué array estamos imprimiendo.
 */
const imprimirArray = (array, titulo = "Vector") => {
    if (!Array.isArray(array)) {
        console.error("ERROR - No se puede imprimir: el dato no es un array.");
        return;
    }
    // Formateo limpio usando .join()
    console.log(`--- ${titulo} ---`);
    console.log(`[ ${array.join(" | ")} ]\n`);
};

/**
 * FUNCIÓN PRINCIPAL ORQUESTADORA
 * Recibe tres funciones como parámetros y ejecuta la lógica del programa.
 * 
 * @param {Function} funcionGenerar 
 * @param {Function} funcionSumar 
 * @param {Function} funcionImprimir 
 */
const calcular = (funcionGenerar, funcionSumar, funcionImprimir) => {
    // ¡LA VALIDACIÓN QUE TE COSTÓ PUNTOS EN EL EXAMEN!
    // Comprobamos estrictamente que los 3 parámetros son funciones.
    if (typeof funcionGenerar !== 'function' || 
        typeof funcionSumar !== 'function' || 
        typeof funcionImprimir !== 'function') {
        console.error("ERROR FATAL - Los tres parámetros deben ser funciones.");
        return;
    }

    const cantidadElementos = 5; // Por ejemplo, arrays de 5 posiciones

    // El enunciado pide que los arrays se declaren AQUÍ DENTRO, no por parámetro.
    const array1 = funcionGenerar(cantidadElementos);
    const array2 = funcionGenerar(cantidadElementos);
    
    // Generamos el tercer array usando la función de suma
    const array3 = funcionSumar(array1, array2);

    // Si la suma falló (por ejemplo, devolvió undefined), no imprimimos nada
    if (!array3) return;

    // Llamamos a la función de imprimir
    funcionImprimir(array1, "Primer Array Generado");
    funcionImprimir(array2, "Segundo Array Generado");
    funcionImprimir(array3, "Array Resultado (Suma Opuestos)");
};

export { generarAleatorios, sumarVectoresOpuestos, imprimirArray, calcular };