"use strict";

function puntuacionMediaPorEquipo(equipos){
    let puntuacionTotal = 0;
    for (let i = 0; i < equipos.length; i++) {
        puntuacionTotal += i;
    }
    return equipos / puntuacionTotal;
}
