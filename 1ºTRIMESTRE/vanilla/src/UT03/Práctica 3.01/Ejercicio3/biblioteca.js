"use strict";

/**
 * Calcula las propinas y el total a pagar basándose en un array de facturas.
 * 
 * @param {Array} facturas - Array con los importes de las facturas.
 * @returns {String|void} Salida debidamente formateada o error.
 */
const calcularGastosViaje = (facturas) => {
    // 1. Cláusula de guarda: Debe ser un array
    if (!Array.isArray(facturas)) {
        console.error("ERROR - Debes proporcionar un array de facturas.");
        return;
    }

    // 2. Cláusula de guarda: El array no puede estar vacío y deben ser números positivos
    if (facturas.length === 0 || !facturas.every(num => typeof num === 'number' && num >= 0)) {
         console.error("ERROR - El array debe contener números positivos.");
         return;
    }

    // Generamos el array de propinas usando .map()
    // map recorre el array 'facturas' y devuelve un nuevo array con los resultados
    const propinas = facturas.map((factura) => {
        if (factura < 50) {
            return factura * 0.20;
        } else if (factura >= 50 && factura <= 200) {
            return factura * 0.15;
        } else {
            return factura * 0.10;
        }
    });

    // Generamos el array final sumando cada factura con su propina
    // Como los arrays 'facturas' y 'propinas' miden lo mismo, usamos el índice (i)
    const totales = facturas.map((factura, i) => factura + propinas[i]);

    // Formateamos la salida final. Usamos un acumulador string
    let resumen = "--- RESUMEN DEL VIAJE ---\n";
    
    facturas.forEach((factura, i) => {
        resumen += `Factura ${i + 1}: ${factura.toFixed(2)}$ | Propina: ${propinas[i].toFixed(2)}$ | Total: ${totales[i].toFixed(2)}$\n`;
    });

    return resumen;
};

export { calcularGastosViaje };