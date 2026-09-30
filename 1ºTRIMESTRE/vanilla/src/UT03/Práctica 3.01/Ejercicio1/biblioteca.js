"use strict";

const sumar = (...numeros) => {
  const resultado = numeros.reduce((acumulador, valor, indice, array) => {
    return acumulador + valor;
  });
  return `${resultado}`;
};

/* // COMO HACERLO AHORA SI O SI
numeros.every((valor) => {
  return !isNaN(valor);
});

// DEVUELVE TRUE O FALSE
const X = numeros.every((valor) => {
  return !isNaN(valor);
});


numeros.every((numeros) => !isNaN(numeros)); // VERSIÓN REDUCIDA

 */
export {sumar};