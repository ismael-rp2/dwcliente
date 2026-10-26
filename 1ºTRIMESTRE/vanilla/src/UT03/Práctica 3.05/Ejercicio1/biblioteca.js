"use strict";


const llenarArraySinRepetidos = () => {
  // Usamos 'let' porque vamos a reemplazar este array por uno nuevo en cada ciclo
  let arrayFinal = [];

  while (arrayFinal.length < 9) {
    const numeroAleatorio = Math.floor(Math.random() * 9) + 1;

    if (!arrayFinal.includes(numeroAleatorio)) {
      // Creamos un nuevo array copiando los elementos anteriores y sumando el nuevo número al final
      arrayFinal = [...arrayFinal, numeroAleatorio]; 
    }
  }

  return arrayFinal;
};


const repetirNumeroArray = (array) => {
    const estaRepetido = array.map((valor, indice, array) => {
        return array.indexOf(valor) !== indice;
    });

    return estaRepetido.includes(true);
};


export { llenarArraySinRepetidos, repetirNumeroArray };