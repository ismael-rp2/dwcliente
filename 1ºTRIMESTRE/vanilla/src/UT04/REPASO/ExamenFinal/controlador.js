"use strict";

import { esArrayValido, 
    tieneContenido 
} from "./utilidades.js";


/**
 * Comprobar que el catálogo esta listo para renderizar.
 * @param {Array} arrayEventos - La lista con todos los eventos.
 * @param {String} idContenedor - ID del contenedor seleccionado.
 * @returns {void} Error, si no cumple alguna de las verificaciones. Mensaje de verificacion.
 */
const prepararCatalogo = (arrayEventos, idContenedor) => {
   const contenedor = document.getElementById(idContenedor);
    if (!contenedor) {
        console.error(`ERROR: No existe ningún elemento con id "${idContenedor}".`);
        return;
    }

    if(esArrayValido(arrayEventos) === false){
        return;
    };

    if(tieneContenido(arrayEventos) === false){
        contenedor.insertAdjacentHTML(`beforeend`, `<p class="alerta-error">No hay eventos disponibles.</p>`);
        return;
    };

    console.log(`Catálogo listo para renderizar`);
};


/**
 * Saber las entradas que quedan en cada evento.
 * @param {Number} entradasDisponibles - Numero de entradas que quedan por vender.
 * @returns {String} Mensaje formateado con la información de las entradas que quedan.
 */
const obtenerEstadoAforo = (entradasDisponibles) => {
    if (entradasDisponibles === 0) {
        return `AGOTADO`;
    } else if (entradasDisponibles < 10) {
        return `¡ÚLTIMAS PLAZAS DISPONIBLES!`;
    } else {
        return `Disponible`;
    }
};


export {prepararCatalogo, obtenerEstadoAforo};