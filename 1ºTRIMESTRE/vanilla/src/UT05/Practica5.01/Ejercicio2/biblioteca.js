"use strict";

const numeroAleatorio = () => {
    const numero = Math.floor(Math.random() * 256);
    console.log(`Número generado: ${numero}`);
    return numero;
};


const cambiarFondo = () => {
    const fondo = document.getElementById(`fondo`);
    const body = document.body;
    
    let contador = 1;
    body.addEventListener(`dblclick`, () => {
        fondo.style.backgroundColor = `rgb(${numeroAleatorio()}, ${numeroAleatorio()}, ${numeroAleatorio()})`;
        console.log(`Has tocado la pantalla ${contador} vez\n------`);
        contador++;
    });

    console.log(body);

};


const seleccionarBody = () => {
    const fondo = document.getElementById(`fondo`);
    return fondo;
};


export {numeroAleatorio, cambiarFondo};