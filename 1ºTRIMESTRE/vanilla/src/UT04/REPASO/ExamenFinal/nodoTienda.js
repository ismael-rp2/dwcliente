"use strict";

/**
 * Limpiar el escaparate y dejarlo sin nada.
 * @param {String} idEscaparate - ID del escaparate
 * @returns {void}
 */
const limpiarEscaparate = (idEscaparate) => {
    const escaparate = document.getElementById(idEscaparate);
    
    if(!escaparate) return;

    while(escaparate.firstChild){
        escaparate.removeChild(escaparate.firstChild);
    }

};


/**
 * Añadir la etiqueta oferta si no la tiene.
 * @param {String} idFicha - ID de la ficha.
 * @returns {void}
 */
const etiquetaOferta = (idFicha) => {
    const ficha = document.getElementById(idFicha);
    if(!ficha) return;
    
    const oferta = ficha.querySelector(`.badge-oferta`);
    if(oferta) return;

    const span = document.createElement(`span`);
    span.classList.add(`badge-oferta`);
    span.textContent = `¡OFERTA!`;

    const acciones = ficha.querySelector(`.acciones`);
    ficha.insertBefore(span, acciones);
};


/**
 * Marcar sin stock, si no lo tiene puesto.
 * @param {*} idFicha - ID de la ficha.
 * @returns {void}
 */
const marcarSinStock = (idFicha) => {
    const ficha = document.getElementById(idFicha);
    if(!ficha) return;

    const p = document.createElement(`p`);
    p.classList.add(`sin-stock`);
    p.textContent = `SIN STOCK`;

    const acciones = ficha.querySelector(`.acciones`);
    ficha.replaceChild(p, acciones);
};

export {limpiarEscaparate, etiquetaOferta, marcarSinStock}