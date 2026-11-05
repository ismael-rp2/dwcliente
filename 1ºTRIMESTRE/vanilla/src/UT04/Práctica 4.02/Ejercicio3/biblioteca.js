"use strict";


const cadaSegundo = setInterval(() => {
    //Seleccionar el parrafo
    const parrafo = document.getElementsByTagName("p");
    
    const parrafoAleatorio = Math.random(parrafo);

    //Seleccionar el body
    const body = document.body.innerHTML;


}, 1000);

export {cadaSegundo};