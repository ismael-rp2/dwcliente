"use strict";

const numeroAleatorio = () => {
    const numero = Math.floor(Math.random() * 1000 ) +1 ;
    console.log(`El número es: ${numero}`);
    return numero;
};

export {numeroAleatorio};