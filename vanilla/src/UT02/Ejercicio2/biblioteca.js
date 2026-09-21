"use strict";

/**
 * Función para calcular la puntuación media de un equipo.
 * @param {Array} puntuaciones - Array numérico con los puntos de cada partido.
 * @returns {number} La media de puntuación.
 */
const calcularMedia = (puntuaciones) => {
    let suma = 0;
    for (let i=0; i < puntuaciones.length; i++){
        suma += puntuaciones[i];
    }
    return suma / puntuaciones.length;    
};

/**
 * Función para determinar y mostrar por consola quién tiene mejor media o si hay empate.
 * @param {number} mediaJuan - Media de puntos de Juan.
 * @param {number} mediaMiguel - Media de puntos de Miguel.
 * @param {number} mediaMaria - Media de puntos de María.
 */
const mostrarGanador = (mediaJuan, mediaMiguel, mediaMaria) => {
    if(mediaJuan > mediaMiguel && mediaJuan > mediaMaria){
        return `Juan es el ganador y su media es ${mediaJuan}`;
    } else if (mediaMiguel > mediaJuan && mediaMiguel > mediaMaria){
        return `Miguel es el ganador y su media es ${mediaMiguel}`;
    } else if (mediaMaria > mediaJuan && mediaMaria > mediaMiguel ){
        return `Maria es la ganadora, y su media es ${mediaMaria}`;
    } else {
        return `El resultado es un empate`;
    }
    
};

export { calcularMedia, mostrarGanador };