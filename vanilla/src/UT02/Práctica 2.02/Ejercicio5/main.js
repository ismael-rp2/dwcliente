"use strict";

import {calcularMediaAritmetica} from "./biblioteca.js";

console.log("--- Prueba 1 (Todo correcto) ---");
calcularMediaAritmetica(4, 8, 12, 16);

console.log("\n--- Prueba 2 (Con un negativo) ---");
calcularMediaAritmetica(10, 5, -3, 20);

console.log("\n--- Prueba 3 (Con decimales) ---");
calcularMediaAritmetica(5, 5.5, 6);