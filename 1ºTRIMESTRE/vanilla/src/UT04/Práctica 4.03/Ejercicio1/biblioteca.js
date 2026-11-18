"use strict";

const limpiarTareasPrueba = () => {
    const tareasPendientes = document.querySelectorAll(".tarea");
    const tareasAcabadas = document.querySelectorAll(".acabada");
    
    tareasPendientes.forEach((tarea) => {
        return tarea.remove()
    });
    
    tareasAcabadas.forEach((tarea) =>  {
        return tarea.remove()
    });
};

const crearTarea = (texto) => {
    // 1. Usamos crypto.randomUUID() para generar un identificador único real (UUID v4)
    const idUnico = crypto.randomUUID();
    const contenedorPendientes = document.getElementById("pendientes");

    // Generamos el HTML con el nuevo idUnico
    const htmlNuevaTarea = `
      <div id="tarea-${idUnico}" class="tarea">
        <p>${texto}</p>
        <p class="botones">
          <input type="button" value="Borrar" class="del" />
          <input type="button" value="Acabar" class="end" />
        </p>
      </div>
    `;
    
    // Inyectamos el elemento en el DOM
    contenedorPendientes.insertAdjacentHTML('beforeend', htmlNuevaTarea);
    
    // Inmediatamente después de inyectarlo, seleccionamos los botones RECIÉN CREADOS
    const tareaNueva = document.getElementById(`tarea-${idUnico}`);
    const botonBorrar = tareaNueva.querySelector(".del");
    const botonAcabar = tareaNueva.querySelector(".end");
    
    // Les asignamos el evento pasando su identificador por parámetro
    botonBorrar.addEventListener("click", () => borrarTareaLOGICA(idUnico));
    botonAcabar.addEventListener("click", () => acabarTareaLOGICA(idUnico));

    console.log(`Nueva tarea creada con UUID: ${idUnico}`);
};

const borrarTareaLOGICA = (id) => {
    const tareaActual = document.getElementById(`tarea-${id}`);
    
    if (tareaActual) {
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
            tareaActual.classList.replace("tarea", "acabada"); 
            tareaActual.querySelector(".del").value = "Archivar";
            tareaActual.querySelector(".end").value = "Volver";
            console.log(`Tarea ${id} completada.`);
        } 
        else if (tareaActual.classList.contains("acabada")) {
            contenedorPendientes.appendChild(tareaActual);
            tareaActual.classList.replace("acabada", "tarea");
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

const anadirTarea = () => {
    const areaDeTexto = document.querySelector("textarea");
    const texto = areaDeTexto.value;

    if (texto.trim() === "") {
        alert("¡No puedes añadir una tarea vacía!, zoquete.");
    } else {
        crearTarea(texto);
        areaDeTexto.value = "";
    }
};

export {
    limpiarTareasPrueba,
    mostrarTareasOcultas,
    anadirTarea
};