"use strict";

// Guardamos el color activo aquí para que todas las funciones puedan leerlo
let colorActual = "#4ea8de";

/**
 * Gestiona la selección de colores en la paleta
 */
const nombreColor = () => {
    const colores = document.querySelectorAll(".color");
    const textoColor = document.getElementById("color-seleccionado");

    colores.forEach((botonColor) => {
        botonColor.addEventListener("click", () => {
            document.querySelector(".color.activo").classList.remove("activo");
            botonColor.classList.add("activo");
            textoColor.textContent = botonColor.dataset.nombre;
            colorActual = botonColor.dataset.color;
        });
    });
};

/**
 * Genera la cuadrícula del lienzo
 */
const tabla = () => {
    const lienzo = document.getElementById("lienzo");
    let filas = "";
    const numero = 50;

    for (let i = 0; i < numero; i++) {
        filas += "<tr>";
        for (let j = 0; j < numero; j++) {
            filas += "<td></td>";
        }
        filas += "</tr>";
    }

    lienzo.innerHTML = filas;
};

/**
 * Permite pintar celdas al hacer clic o arrastrar el ratón
 */
const pintarLienzo = () => {
    const lienzo = document.getElementById("lienzo");
    let pintando = false;

    // Al pulsar el ratón sobre el lienzo
    lienzo.addEventListener("mousedown", (e) => {
        if (e.target.tagName === "TD") {
            pintando = true;
            e.target.style.backgroundColor = colorActual;
        }
    });

    // Al mover el ratón mientras sigue pulsado
    lienzo.addEventListener("mouseover", (e) => {
        if (pintando && e.target.tagName === "TD") {
            e.target.style.backgroundColor = colorActual;
        }
    });

    // Al soltar el clic en cualquier parte de la ventana
    window.addEventListener("mouseup", () => {
        pintando = false;
    });

};

/**
 * Limpia todas las celdas del lienzo al pulsar "Borrar"
 */
const borrarLienzo = () => {
    const btnReiniciar = document.getElementById("btn-reiniciar");

    btnReiniciar.addEventListener("click", () => {
        const celdas = document.querySelectorAll("#lienzo td");
        celdas.forEach((celda) => {
            celda.style.backgroundColor = "transparent";
        });
    });
};

export { nombreColor, tabla, pintarLienzo, borrarLienzo };
