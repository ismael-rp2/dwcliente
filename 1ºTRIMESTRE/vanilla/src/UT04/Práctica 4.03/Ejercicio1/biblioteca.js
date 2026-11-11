"use strict";

const limpiarTareasPrueba = () => {
    const tareasPendientes = document.querySelectorAll(".tarea");
    const tareasAcabadas = document.querySelectorAll(".acabada");
    
    tareasPendientes.forEach(tarea => tarea.remove());
    tareasAcabadas.forEach(tarea => tarea.remove());
};

const crearTarea = (texto) => {
    const idUnico = Date.now();
    const contenedorPendientes = document.getElementById("pendientes");

    const htmlNuevaTarea = `
      <div id="tarea-${idUnico}" class="tarea">
        <p>${texto}</p>
        <p class="botones">
          <input type="button" value="Borrar" class="del" onclick="borrarTarea(${idUnico})" />
          <input type="button" value="Acabar" class="end" onclick="acabarTarea(${idUnico})" />
        </p>
      </div>
    `;
    contenedorPendientes.insertAdjacentHTML('beforeend', htmlNuevaTarea);
    console.log(`Nueva tarea creada con ID: ${idUnico}`);
};

const borrarTareaLOGICA = (id) => {
    const tareaActual = document.getElementById(`tarea-${id}`);
    
    if (tareaActual) {
        // Usamos classList.contains para evitar fallos si hay varias clases a la vez
        if (tareaActual.classList.contains("tarea")) {
            tareaActual.remove();
            console.log(`Tarea ${id} ha sido borrada.`);
        } 
        else if (tareaActual.classList.contains("acabada")) {
            tareaActual.classList.add("oculta");
            console.log(`Tarea ${id} archivada.`);
        }
    }
};

const acabarTareaLOGICA = (id) => {
    const tareaActual = document.getElementById(`tarea-${id}`);
    const contenedorAcabadas = document.getElementById("acabadas");
    const contenedorPendientes = document.getElementById("pendientes");

    if (tareaActual) {
        if (tareaActual.classList.contains("tarea")) {
            contenedorAcabadas.appendChild(tareaActual);
            // Cambiamos 'tarea' por 'acabada' respetando si hay más clases
            tareaActual.classList.replace("tarea", "acabada"); 
            tareaActual.querySelector(".del").value = "Archivar";
            tareaActual.querySelector(".end").value = "Volver";
            console.log(`Tarea ${id} completada.`);
        } 
        else if (tareaActual.classList.contains("acabada")) {
            contenedorPendientes.appendChild(tareaActual);
            // Restauramos su clase original
            tareaActual.classList.replace("acabada", "tarea");
            // Le quitamos el oculto por si acaso estaba archivada
            tareaActual.classList.remove("oculta");
            tareaActual.querySelector(".del").value = "Borrar";
            tareaActual.querySelector(".end").value = "Acabar";
            console.log(`Tarea ${id} vuelve a pendientes.`);
        }
    }
};

const mostrarTareasOcultas = () => {
    const tareasOcultas = document.querySelectorAll(".oculta");
    tareasOcultas.forEach(tarea => tarea.classList.remove("oculta"));
    console.log(`Se han restaurado ${tareasOcultas.length} tareas archivadas.`);
};


export {limpiarTareasPrueba, crearTarea, borrarTareaLOGICA, acabarTareaLOGICA, mostrarTareasOcultas};