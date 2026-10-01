"use strict";

// Función para comprobar números:
const comprobarNumeros = (array = []) => {
  if(Array.isArray(array)) {
    return array.every((valor, indice, array) => { // Funcion flecha numeros.every(() => {});
      return !isNaN(valor)
    }); 
  }
};

/* Tengo que poner que como minimo son 2 parametros
  console.log(`Error - NO es un numero`); //Lo pongo por que lo dice el enunciado
por que lo pide el enunciado pero no se donde ponerlo
 */
const sumar = (...numeros) => {
  if(comprobarNumeros(numeros)) {
    return numeros.reduce((acumulador, valor, indice, array) => {
      return (acumulador += valor);
    });
  }
}; 

/* NO CREAMOS UNA FUNCION PARA LA COMPROBACIÓN DE PARES
YA QUE SOLO SE USA UNA VEZ. Y TENEMOS QUE HACER UN BUEN
DISEÑO
 */

/* 
NO CUMPLE CON EL PRINCIPIO DE RESPONSABILIDAD ÚNICA
UNA FUNCIÓN UNA COSA
const sumar = (...numeros) => {
  const sonNumeros = numeros.every((valor, indice, array) => { // Funcion flecha numeros.every(() => {});
    return !isNaN(numeros) ;
  }); 

  if(sonNumeros) {
    return numeros.reduce((acumulador, v, i, a) => {
      return acumulador += v;
    });
  };
}; */



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