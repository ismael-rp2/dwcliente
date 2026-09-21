"use strict";

import { productoFinal } from "./biblioteca.js";

// 1. Llamada normal con todos los parámetros
const nombreProducto = "Platano";
const precio = 50;
const impuesto = 4; // 4% de impuesto
productoFinal(nombreProducto, precio, impuesto);

// 2. Llamada vacía para forzar que entren los valores por defecto del profesor
productoFinal();

// 3. Llamada con un texto en el precio para comprobar que salta el console.error
productoFinal("Coche", "mil euros", 21);