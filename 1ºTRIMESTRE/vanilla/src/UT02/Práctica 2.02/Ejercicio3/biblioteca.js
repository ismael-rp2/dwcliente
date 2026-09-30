"use strict";

const numeroEnteroPositivo = (numero) =>{
    return Number.isInteger(numero) && numero > 0;
}

const comprobacion = (numero) => {
    if(numeroEnteroPositivo) {
        const multiplos = [];
        for(let i = 1; i <= numero; i++){
            if(i % 3 === 0){
                multiplos.push(i);
            }
        }
        console.log(`${multiplos.join(", ")}`);
        return;
    }
    return `El ${numero} no es válido, ZOQUETE`;
}

export { comprobacion };  