"use strict";

/**
 * Elimina todos los nodos hijos de un contenedor mediante removeChild.
 * @param {string} idContenedor - ID del contenedor que se desea vaciar.
 * @returns {void}
 */
const vaciarContenedor = (idContenedor) => {
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) {
        console.error(`ERROR: El elemento con id "${idContenedor}" no existe.`);
        return;
    }

    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
};

/**
 * Inserta una insignia de aforo reducido antes del bloque de botones sin duplicarla.
 * @param {string} idTarjeta - ID de la tarjeta de evento.
 * @returns {void}
 */
const insertarAvisoAforo = (idTarjeta) => {
    const tarjeta = document.getElementById(idTarjeta);
    if (!tarjeta) return;

    // Si ya existe un hijo con clase .badge-aforo dentro de la tarjeta, salimos
    if (tarjeta.querySelector(`.badge-aforo`)) return;

    // Buscamos el hijo .botones SOLO dentro de esta tarjeta
    const divBotones = tarjeta.querySelector(`.botones`);
    if (!divBotones) return;

    const spanAviso = document.createElement(`span`);
    spanAviso.classList.add(`badge-aforo`);
    spanAviso.textContent = `¡ÚLTIMAS PLAZAS DISPONIBLES!`;

    // El PADRE inserta (nuevoNodo, antesDeEsteHijo)
    tarjeta.insertBefore(spanAviso, divBotones);
};

/**
 * Sustituye el bloque de botones de una tarjeta por un aviso de evento agotado.
 * @param {string} idTarjeta - ID de la tarjeta de evento.
 * @returns {void}
 */
const marcarAgotado = (idTarjeta) => {
    const tarjeta = document.getElementById(idTarjeta);
    if (!tarjeta) return;

    const divBotones = tarjeta.querySelector(`.botones`);
    if (!divBotones) return;

    const parrafoAgotado = document.createElement(`p`);
    parrafoAgotado.classList.add(`alerta-error`);
    parrafoAgotado.textContent = `AGOTADO`;

    // El PADRE reemplaza (nuevoNodo, viejoNodoHijo)
    tarjeta.replaceChild(parrafoAgotado, divBotones);
};

export { vaciarContenedor, insertarAvisoAforo, marcarAgotado };