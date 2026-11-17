"use strict";
import { imprimirPoliticas } from './biblioteca.js';

// Simulamos el JSON que te dará el profesor
const politicas = [
    { id: 101, texto: "Prohibido comer en el laboratorio", obligatoria: true },
    { id: 102, texto: "Traer ratón propio", obligatoria: false },
    { id: 103, texto: "Llevar la tarjeta de acceso visible", obligatoria: true }
];

imprimirPoliticas(politicas);