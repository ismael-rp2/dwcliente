"use strict";

import { generarTablero3x3, tieneRepetidos3x3 } from "./biblioteca.js";

console.log("--- EJERCICIO 2: GENERACIÓN TABLERO 3x3 ---");
const miTablero = generarTablero3x3();
console.log("Tablero generado:", miTablero);

console.log("\n--- EJERCICIO 2: COMPROBACIÓN REPETIDOS ---");
// Comprobamos el tablero perfecto generado aleatoriamente
const resultadoPerfecto = tieneRepetidos3x3(miTablero);
console.log(`¿Tiene repetidos el tablero generado?: ${resultadoPerfecto}`); // Debería dar false

// Comprobamos un tablero tramposo hecho a mano
const tableroConTrampa = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 1] // El 1 está repetido
];
const resultadoTrampa = tieneRepetidos3x3(tableroConTrampa);
console.log(`¿Tiene repetidos el tablero con trampa?: ${resultadoTrampa}`); // Debería dar true