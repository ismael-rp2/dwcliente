"use strict";

const eliminarTareasPruebas = () => {
    const tareasPendientes = document.querySelectorAll(`.tarea`);
    const tareasAcabadas = document.querySelectorAll(`.acabada`);

    tareasPendientes.forEach(valor => valor.remove());
    tareasAcabadas.forEach(valor => valor.remove());
};

const crearTarea = (texto) => {
    const idUnico = crypto.randomUUID();
    const contenedorPendientes = document.getElementById(`pendientes`);

    // CORRECCIÓN: Etiqueta </div> bien escrita y añadida la class="tarea"
    const htmlNuevaTarea = `
    <div id="${idUnico}" class="tarea">
        <p>${texto}</p>
        <p class="botones">
            <input type="button" value="Borrar" class="del" />
            <input type="button" value="Acabar" class="end" />
        </p>
    </div>
    `;

    contenedorPendientes.insertAdjacentHTML(`beforeend`, htmlNuevaTarea);

    const tareaNueva = document.getElementById(`${idUnico}`);
    
    // CORRECCIÓN: Buscamos dentro de tareaNueva, no en todo el document
    const botonBorrar = tareaNueva.querySelector(`.del`);
    const botonAcabar = tareaNueva.querySelector(`.end`);

    // CORRECCIÓN: Usamos la función flecha para que espere al clic
    botonBorrar.addEventListener(`click`, () => borrarTareaLogica(idUnico));
    botonAcabar.addEventListener(`click`, () => acabarTareaLogica(idUnico));
};

const borrarTareaLogica = (id) => {
    const tareaActual = document.getElementById(`${id}`);

    if (tareaActual) {
        if (tareaActual.classList.contains(`tarea`)) {
            tareaActual.remove();
        } else if (tareaActual.classList.contains(`acabada`)) {
            tareaActual.classList.add(`oculta`);
        }
    }
};

const acabarTareaLogica = (id) => {
    const tareaActual = document.getElementById(`${id}`);
    const contenedorAcabadas = document.getElementById(`acabadas`);
    const contenedorPendientes = document.getElementById(`pendientes`);

    if (tareaActual) {
        if (tareaActual.classList.contains("tarea")) {
            contenedorAcabadas.appendChild(tareaActual);
            tareaActual.classList.replace("tarea", "acabada"); 
            tareaActual.querySelector(".del").value = "Archivar";
            tareaActual.querySelector(".end").value = "Volver";
        
        } else if (tareaActual.classList.contains("acabada")) {
            contenedorPendientes.appendChild(tareaActual);
            tareaActual.classList.replace("acabada", "tarea");
            tareaActual.classList.remove("oculta");
            tareaActual.querySelector(".del").value = "Borrar";
            tareaActual.querySelector(".end").value = "Acabar";
        }
    }
}

const mostrarTareasOcultas = () => {
    const tareasOcultas = document.querySelectorAll(".oculta");
    tareasOcultas.forEach((valor) => {
        valor.classList.remove("oculta");
    });
};

const anadirTareasPendientes = () => {
    const textArea = document.querySelector(`textarea`);
    const texto = textArea.value;

    if (texto.trim() === "") {
        console.error(`¡No puede haber una tarea vacía!, zoquete`);
    } else {
        crearTarea(texto);
        textArea.value = ""; // CORRECCIÓN: Así se limpia el textarea
    }
};

// CORRECCIÓN: Los botones apuntan a las funciones inicializadoras correctas
const inicializarBotonAnadir = () => {
    const boton = document.querySelector(`.add`);
    boton.addEventListener(`click`, anadirTareasPendientes); 
};

const inicializarBotonMostrar = () => {
    const boton = document.querySelector(`.sho`);
    boton.addEventListener(`click`, mostrarTareasOcultas);
}

export {
    eliminarTareasPruebas,
    inicializarBotonAnadir,
    inicializarBotonMostrar
};
