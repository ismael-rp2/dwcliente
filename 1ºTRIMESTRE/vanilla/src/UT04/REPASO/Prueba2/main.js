"use strict";
import { renderizarCatalogo } from './biblioteca.js';

// Simulamos los datos que vendrían de un JSON
const productos = [
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 120 },
    { nombre: "Ratón", precio: 25 },
    { nombre: "Silla", precio: 150 }
];

renderizarCatalogo(productos);