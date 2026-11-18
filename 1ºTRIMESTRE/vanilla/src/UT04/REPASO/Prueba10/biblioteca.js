"use strict";

// 1. Parámetros por defecto directamente en la firma de la función
const generarTabla = (filas = 5, columnas = 5) => {
    
    const contenedorTabla = document.getElementById(`contenedor-tabla`);
    if(!contenedorTabla) return;
    
    contenedorTabla.innerHTML = ``; // Vaciarlo

    // Inyectamos el string devuelto por la función auxiliar
    contenedorTabla.insertAdjacentHTML(`beforeend`, crearTabla(filas, columnas));

    // 2. Buscamos los 'td' SOLO dentro de nuestro contenedor
    const celdas = contenedorTabla.querySelectorAll(`td`);
    const arrayCeldas = [...celdas];
    
    arrayCeldas.forEach((valor) => {
        // 3. parseInt sobre el texto de la celda
        const numero = parseInt(valor.textContent);
        
        // 4. Comprobación booleana directa
        if (numero % 2 === 0) {
            valor.classList.add(`par`);
        }
    });
};

const crearTabla = (filas, columnas) => {
    let tabla = `<table>`;
    let numero = 1;
    for (let i = 0; i < filas; i++) {
        tabla = `${tabla}<tr>`;
        
        for (let j = 0; j < columnas; j++) {
            tabla = `${tabla}<td>${numero}</td>`;
            numero++;
        }
        tabla = `${tabla}</tr>`;
    }
    tabla = `${tabla}</table>`;
    
    return tabla;
};

export { generarTabla };