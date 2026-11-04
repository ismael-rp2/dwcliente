"use strict";

/**
 * Aprovecha el método insertBefore junto con nextSibling.
 * 
 * @param {HTMLElement} nuevoElemento - El nodo que queremos insertar.
 * @param {HTMLElement} existenteElemento - El nodo de referencia.
 */
export const insertAfter = (nuevoElemento, existenteElemento) => {
    // Obtenemos el padre del elemento de referencia
    const padre = existenteElemento.parentNode;
    
    // Insertamos el nuevo elemento antes del hermano siguiente
    padre.insertBefore(nuevoElemento, existenteElemento.nextSibling);
};
