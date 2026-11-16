"use strict";

import { 
    limpiarTareasPrueba, 
    mostrarTareasOcultas, 
    anadirTarea
} from "./biblioteca.js";

// 1. Borrar el DOM inicial de pruebas
limpiarTareasPrueba();

// 2. Configurar botón de Añadir
const inicializarBotonAnadir = () => {
    const boton = document.querySelector(".add");
    boton.addEventListener("click", anadirTarea);
};
inicializarBotonAnadir();

// 3. Configurar botón de Mostrar
const inicializarBotonMostrar = () => {
    // La clase .sho es la del botón "Mostrar", la enganchamos a su función
    const boton = document.querySelector(".sho");
    boton.addEventListener("click", mostrarTareasOcultas);
};
inicializarBotonMostrar();