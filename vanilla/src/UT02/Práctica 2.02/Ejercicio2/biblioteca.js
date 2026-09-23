"use strict";

const numeroEntero = (numero) => {
    return Number.isInteger(numero); //True si es entero.
};


const numeroPar = (numero) => {
    return numero % 2 === 0; //True si es par.
};


const numeroPositivo = (numero) =>{
    return numero >= 0; //True si es numero positivo.
};


const numeroPrimo = (numero) =>{
    if (numero <= 1) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Si es divisible, no es primo (devuelve false)
        }
    }

  return true; // Si no encontró divisores, es primo (devuelve true)
};


const analisisNumerico = (numero) =>{
    console.log(numeroEntero(numero) ? "Es un entero" : "No es un entero");     
    console.log(numeroPar(numero) ? "Es par" : "No es par"); 
    console.log(numeroPositivo(numero) ? "Es positivo" : "No es positivo");
    console.log(numeroPrimo(numero) ? "Es primo" : "No es primo");};

export {analisisNumerico};