"use strict";

/**
 * Comprobar las plazas que quedan en cada evento.
 * @param {Array} eventos - La lista de eventos.
 * @returns 
 */
const filtrarConPlazas = (eventos) => {
    let resultado = [];

    if (!Array.isArray(eventos)) {
        console.error(`ERROR: Espabila, no has pasado un array válido.`);
    } else {
        resultado = eventos.filter((valor) => {
            const { entradasDisponibles } = valor;
            return entradasDisponibles > 0;         // Devolvemos true o false
        });
    }

    return resultado;
};

// 2. FOREACH: sumar propiedades de cada objeto en acumuladores externos
let totalEntradas = 0;
let totalPrecio = 0;

eventos.forEach((evento) => {
    const { entradasDisponibles, precio } = evento; // Sacamos ambos números
    totalEntradas += entradasDisponibles;
    totalPrecio += precio;
});


/**
 * Mostrar por pantalla los eventos, entradas y el precio medio formateado a 2 decimales.
 * @param {Array} eventos - La lista de eventos.
 * @param {String} idPanel - El nombre del panel.
 * @returns 
 */
const pintarResumen = (eventos, idPanel) => {
    const panel = document.getElementById(`panel`);
    if(!panel) return; // Esto me ha dicho mi profesor que no lo haga.

    if(!Array.isArray(eventos)){
        console.log(`ERROR - El array introducido no es válido.`);
        return;
    }

    const nuevoArray = eventos.forEach((valor, indice) => {
        valor.eventos +=valor
    });

    while(panel){
        panel.removeChild();
    }    

};

export {filtrarConPlazas, pintarResumen};