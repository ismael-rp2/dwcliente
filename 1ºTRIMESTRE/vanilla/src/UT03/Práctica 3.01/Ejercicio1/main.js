"use strict";

import { sumar } from "./biblioteca.js";

console.log("-- EJERCICIO 1 --");
console.log(sumar(1)); // Error: pocos parámetros
console.log(sumar(1, 3, "4")); // Error: tipo no numérico
console.log(sumar(1, 3, 4, 10)); // Funciona correctamente