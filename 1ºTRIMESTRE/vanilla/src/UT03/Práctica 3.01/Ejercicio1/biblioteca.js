"use strict";

/**
 * 
 * @param  {...Number} numeros - Los números a sumar (mínimo 2).
 * @returns {String|void} La suma formateada o aborta si hay error.
 */
const sumar = (...numeros) => {
    // 1. Cláusula de guarda: Comprobar el número mínimo de parámetros
    if (numeros.length < 2) {
        console.error("ERROR - Debes proporcionar como mínimo dos números, ¡zoquete!");
        return; // Detiene la ejecución
    }

    // 2. Cláusula de guarda: Comprobar que TODOS son números válidos
    // Usamos every y comprobamos explícitamente el tipo y que no sea NaN
    const todosSonNumeros = numeros.every((num) => typeof num === 'number' && !isNaN(num));
    
    if (!todosSonNumeros) {
        console.error("ERROR - Todos los parámetros deben ser de tipo numérico.");
        return; // Detiene la ejecución
    }

    // 3. Lógica principal: Sumar usando reduce (funciones puras)
    const sumaTotal = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

    return `El resultado de sumar ${numeros.join(" + ")} es: ${sumaTotal}`;
};

export { sumar };

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