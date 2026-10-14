"use strict";

import { generarAleatorios, sumarVectoresOpuestos, imprimirArray, calcular } from "./biblioteca.js";

console.log("-- EJERCICIO 4: SUMANDO VECTORES --");

// Llamamos a la función principal pasándole LAS FUNCIONES (sin paréntesis).
// Si pusiéramos generarAleatorios(), estaríamos pasando su RESULTADO, no la función en sí.
calcular(generarAleatorios, sumarVectoresOpuestos, imprimirArray);