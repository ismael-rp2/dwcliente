"use strict";

// Importamos la función desde tu biblioteca
import { buscarDniPorLetra } from "./biblioteca.js";

console.log("--- EJERCICIO 5: BÚSQUEDA MASIVA DE DNI ---");

// 1. Prueba normal (letra mayúscula)
console.log("\nBuscando DNIs con la letra 'A'...");
buscarDniPorLetra("A");

// 2. Prueba de la conversión a mayúsculas (pasamos minúscula para ver si el código la arregla)
console.log("\nBuscando DNIs con la letra 'm' (minúscula)...");
buscarDniPorLetra("m");

// 3. Pruebas de error (para que el profe vea que controlas los fallos)
console.log("\nPruebas de la cláusula de guarda (deben salir errores controlados):");
buscarDniPorLetra(123);