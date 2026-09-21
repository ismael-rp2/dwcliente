"use strict";

/**
 * Calcula y muestra el precio final de un producto aplicando su impuesto.
 * @param {string} nombreProducto - El nombre del producto.
 * @param {number} precio - El precio base sin impuestos.
 * @param {number} impuesto - El porcentaje de impuesto a aplicar (ej: 21 para 21%).
 */
// Los valores por defecto se asignan directamente en los parámetros
const productoFinal = (nombreProducto = "Producto genérico", precio = 100, impuesto = 21) => {
    
    // Validamos que precio e impuesto sean números
    if (!isNaN(precio) && !isNaN(impuesto)) {
        
        // Calculamos el precio total (precio base + (precio base * porcentaje / 100))
        const total = precio + (precio * (impuesto / 100));
        
        // Usamos las comillas invertidas multilínea para que la salida sea legible
        console.log(`
            --- FACTURA ---
            Producto: ${nombreProducto}
            Precio base: ${precio}€
            Impuesto: ${impuesto}%
            Total a pagar: ${total}€
        `);
    } else {
        // Mostramos el error exigido por el enunciado
        console.error("Error: El precio y el impuesto deben ser numéricos.");
    }
};

export { productoFinal };