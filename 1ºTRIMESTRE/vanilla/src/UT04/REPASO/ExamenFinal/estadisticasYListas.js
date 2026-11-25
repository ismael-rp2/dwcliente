"use strict";

/**
 * Genera una lista HTML desordenada a partir de un array de servicios.
 * @param {Array<string>} servicios - Lista de servicios del evento.
 * @returns {string} Cadena HTML con la estructura <ul><li>...</li></ul>.
 */
const generarListaServicios = (servicios) => {
    if (!Array.isArray(servicios) || servicios.length === 0) {
        return `<ul><li>Sin servicios especificados</li></ul>`;
    }

    const itemsHtml = servicios.map((valor) => {
        return `<li>${valor}</li>`;
    }).join(``);

    return `<ul>${itemsHtml}</ul>`;
};

/**
 * Calcula las métricas globales de los eventos visibles y las renderiza en el panel.
 * @param {Array<Object>} eventosVisibles - Lista de objetos de eventos visibles.
 * @param {string} idPanel - ID del contenedor HTML de estadísticas.
 * @returns {void}
 */
const calcularYMostrarEstadisticas = (eventosVisibles, idPanel) => {
    const panel = document.getElementById(idPanel);
    if (!panel) {
        console.error(`ERROR: No existe ningún contenedor con id "${idPanel}".`);
        return;
    }

    if (!Array.isArray(eventosVisibles)) {
        console.error(`ERROR: Se esperaba un array válido de eventos.`);
        return;
    }

    const numeroTotalEventos = eventosVisibles.length;
    let sumaTotalEntradas = 0;
    let sumaTotalPrecios = 0;

    eventosVisibles.forEach((evento) => {
        sumaTotalEntradas += evento.entradasDisponibles;
        sumaTotalPrecios += evento.precio;
    });

    const precioMedio = numeroTotalEventos === 0 ? 0 : sumaTotalPrecios / numeroTotalEventos;

    while (panel.firstChild) {
        panel.removeChild(panel.firstChild);
    }

    const htmlEstadisticas = `
        <p>Número de eventos: ${numeroTotalEventos}</p>
        <p>Entradas disponibles: ${sumaTotalEntradas}</p>
        <p>Precio medio: ${precioMedio.toFixed(2)}€</p>
    `;

    panel.insertAdjacentHTML(`beforeend`, htmlEstadisticas);
};

export { generarListaServicios, calcularYMostrarEstadisticas };