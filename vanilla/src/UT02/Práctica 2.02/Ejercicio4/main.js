"use strict";

import { calcularPotencia } from "./biblioteca.js";

const base = 3;
const exponente = 4;

// Almacenamos el resultado de la función
const resultado = calcularPotencia(base, exponente);

// Imprimimos debidamente formateado, como pide el profesor
console.log(`La potencia de ${base} elevado a ${exponente} es: ${resultado}`);