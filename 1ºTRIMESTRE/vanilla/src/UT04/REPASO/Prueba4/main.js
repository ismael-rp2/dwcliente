"use strict";
import { aplicarRebajas } from './biblioteca.js';

// Simulamos que pulsamos un botón de rebajas al instante

setTimeout(() => {
    aplicarRebajas();
    console.log(`Se ha aplicado un descuento de 20% a los precios`);
}, 2000);