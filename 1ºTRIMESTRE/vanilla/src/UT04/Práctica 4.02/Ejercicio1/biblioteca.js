"use strict";

/**
 * Recorrer el body completo
 * @returns {String} El body en formato String
 */
const recorrerBody = () => {
    const cuerpoBody = document.body.innerHTML;
    console.log(`Body: ${cuerpoBody}`); //Prueba consola
    return cuerpoBody;
};

/**
 * Bloquear una palabra por una advertencia
 * @param {String} palabra La palabra que se desea bloquear
 * @param {String} cuerpoBody El cuerpo donde se encuentra esa palabra
 * @returns {String} HTML con la palabra reemplazada por un span
 */
const bloquearContenido = (palabra, cuerpoBody) => {
    const palabraRemplazo = palabra.toLowerCase();
    return cuerpoBody.replaceAll(`${palabraRemplazo}`, `<span class="censurado">Contenido Bloqueado</span>`);
};


export {recorrerBody, bloquearContenido};