"use strict";
// Importamos las funciones desde el archivo donde están guardadas
import { generarArray, imprimirArray } from "./biblioteca.js";

// 1. Generamos el array con números del 1 al 10
const miLista = generarArray();

// 2. Imprimimos el array para comprobar el resultado
console.log("--- Probando impresión de Array ---");
imprimirArray(miLista);
