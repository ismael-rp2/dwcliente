"use strict";

//A poder ser hay que hacer las cosas en una sola línea
//siempre que se pueda

function calcularIndiceMasaCorporal(peso, altura) {
    return peso / (altura * altura);
}

function tieneIMCMayor(imc1, imc2){
    return imc1 > imc2;
}

export { calcularIndiceMasaCorporal, tieneIMCMayor };