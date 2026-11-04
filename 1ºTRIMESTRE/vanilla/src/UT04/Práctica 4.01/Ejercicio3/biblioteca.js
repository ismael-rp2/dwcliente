"use strict";

/**
 * Función que transforma un texto a formato "Cani" (alternando mayúsculas y minúsculas).
 * @param {String} texto - El texto original.
 * @returns {String} El texto transformado.
 */
export const toCani = (texto) => {
    // Convertimos el string a array usando spread operator, mapeamos y volvemos a unir
    return [...texto].map((letra, indice) => {
        return indice % 2 === 0 ? letra.toLowerCase() : letra.toUpperCase();
    }).join("");
};

/**
 * Función que genera el HTML de una nueva fila para la tabla.
 * @param {String} fraseOriginal - La frase extraída del array.
 * @returns {String} Estructura HTML de la fila (tr > td).
 */
export const generarFilaTabla = (fraseOriginal) => {
    const fraseCani = toCani(fraseOriginal);
    return `
        <tr>
            <td>${fraseOriginal}</td>
            <td>${fraseCani}</td>
        </tr>
    `;
};
