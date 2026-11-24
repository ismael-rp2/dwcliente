"use strict";


const mostrarPosicion = () => {
    const body = document.body;
    console.log(body);

    window.addEventListener("mousemove", (event) => {
        console.log("Ventana (client):", event.clientX, event.clientY);
        cambiarTexto(event.clientX, event.clientY);
    
    });
};


const cambiarTexto = (ejeX, ejeY) => {

    const pX = document.getElementById(`ejeX`); 
    const pY = document.getElementById(`ejeY`);
    pX.textContent = `Coordenadas eje X: ${ejeX}`;
    pY.textContent = `Coordenadas eje Y: ${ejeY}`


};


export {mostrarPosicion};