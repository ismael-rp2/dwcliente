"use strict";

const esPrimo = (numero) => {
    //Si es un número negativo
    if(numero <= 1) return false;
    
    for(let i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i === 0) return false;
    }

    return true;
};

const esPalindromo = (numero) => {
    const texto = String(numero);
    const textoInvertido = [...texto].reverse().join("");
    return texto === textoInvertido;
};

const buscarPrimosPalindromos = (limite = 100000) => {
    const resultado = [];
    for(let i = 2; i <= limite; i++){
        if(esPalindromo(i) && esPrimo(i)){
            resultado.push(i);
        };
    }

    console.log(`Numéros encontrados: ${resultado.length}\n${resultado.join(", ")}`);
};

export {buscarPrimosPalindromos};
