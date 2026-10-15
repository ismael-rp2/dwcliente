"use strict";

import { temporizador } from "./biblioteca.js";

// PRUEBAS DE LA FASE 1
console.log("--- CASOS QUE DEBEN DAR ERROR ---");
temporizador(-2, 15);   // Error por negativo
temporizador(1, 80);    // Error por pasarse de 59 segundos
temporizador("hola");   // Error por no ser número

console.log("\n--- CASOS QUE DEBEN FUNCIONAR ---");
temporizador(2, 30);    // Debe decir 2 min y 30 seg
//temporizador(45);       // Debe decir 0 min y 45 seg