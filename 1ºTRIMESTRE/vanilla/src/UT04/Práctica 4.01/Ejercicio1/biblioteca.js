"use strict";

const contarParrafos = () => {
    /* La diferencias son las referencias vivas y muertas.
    El querySelecctor solo selecciona los parrafos actuales.
    Mientras que getElementBytagName si se añade luego uno
    nuevo lo selecciona. */ 
    const parrafos = document.querySelectorAll("p");
    return parrafos.length; 
};

const textoSegundoParrafo = () => {
    const parrafos = document.querySelectorAll("p");
    // Verificamos que al menos haya 2 párrafos (el índice 1 es el segundo)
    console.log(parrafos[1]);
    return parrafos.length >= 2 ? parrafos[1].textContent : "No hay un segundo párrafo.";
};

const contarEnlaces = () => {
    const enlaces = document.querySelectorAll("a");
    return enlaces.length;
};

const direccionPrimerEnlace = () => {
    const enlaces = document.querySelectorAll("a");
    return enlaces.length >= 1 ? enlaces[0].href : "No hay enlaces.";
};

const direccionPenultimoEnlace = () => {
    const enlaces = document.querySelectorAll("a");
    // El penúltimo es la longitud total menos 2
    return enlaces.length >= 2 ? enlaces[enlaces.length - 2].href : "No hay suficientes enlaces.";
};

export {contarParrafos, textoSegundoParrafo, contarEnlaces, direccionPrimerEnlace, direccionPenultimoEnlace};