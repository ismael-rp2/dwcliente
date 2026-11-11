"use strict";

import { 
    limpiarTareasPrueba, 
    crearTarea, 
    borrarTareaLOGICA, 
    acabarTareaLOGICA, 
    mostrarTareasOcultas 
} from "./biblioteca.js";

// 1. Limpiamos las tareas estáticas iniciales
limpiarTareasPrueba();

// 2. Funciones globales requeridas por el enunciado (onclick en HTML)
window.anadirTarea = () => {
    const areaDeTexto = document.querySelector("textarea");
    const texto = areaDeTexto.value;

    if (texto.trim() === "") {
        alert("¡No puedes añadir una tarea vacía! Zoquete.");
    } else {
        crearTarea(texto);
        areaDeTexto.value = "";
    }
};

window.borrarTarea = (id) => {
    borrarTareaLOGICA(id);
};

window.acabarTarea = (id) => {
    acabarTareaLOGICA(id);
};

// 3. Asignación de eventos mediante JS puro
const botonMostrar = document.querySelector(".sho");
if (botonMostrar) {
    botonMostrar.onclick = mostrarTareasOcultas;
}