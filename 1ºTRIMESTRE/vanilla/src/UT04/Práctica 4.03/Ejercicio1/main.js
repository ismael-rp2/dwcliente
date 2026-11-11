"use strict";

import { 
    limpiarTareasPrueba, 
    crearTarea, 
    borrarTareaLOGICA, 
    acabarTareaLOGICA, 
    mostrarTareasOcultas, 
    anadirTarea,
    borrarTarea
} from "./biblioteca.js";


//Borrar el DOm
limpiarTareasPrueba();


//Botón de añadir
const botonAnadirTarea = () => {
    const boton = document.querySelector(".add");
    boton.addEventListener("click", anadirTarea);
};

//Ejecutar funciona añadir
botonAnadirTarea();


//Para borrar la tarea
const botonBorrarTarea = () => {
    const boton = document.querySelector(".sho");
    boton.addEventListener("click", borrarTarea);
};
botonBorrarTarea();



//Para acabar la tarea
const botonAcabarTarea = () => {
    const boton = document.querySelector("./end");
    boton.addEventListener("click", acabarTarea);
};
botonAcabarTarea();


window.acabarTarea = (id) => {
    acabarTareaLOGICA(id);
};




const botonMostrar = document.querySelector(".sho");
if (botonMostrar) {
    botonMostrar.onclick = mostrarTareasOcultas;
}