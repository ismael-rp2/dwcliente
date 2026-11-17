"use strict";

/**
 * 1. FUNCIÓN SECUNDARIA (Modularización)
 * Se encarga ÚNICAMENTE de crear el HTML, inyectarlo y asignarle su evento.
 * Fíjate en el parámetro por defecto: puesto = "Operario base"
 */
const crearFicha = (nombre, puesto = "Operario base") => {
    const panel = document.getElementById(`panel-rrhh`);
    if (!panel) return;

    // Generamos el ID único para esta ficha concreta
    const id = crypto.randomUUID();

    // Inyectamos el HTML de la tarjeta, interpolando los datos y el ID
    panel.insertAdjacentHTML(`beforeend`, `
        <div id="ficha-${id}" class="empleado-card">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Puesto:</strong> ${puesto}</p>
            <button class="btn-suspender">Suspender</button>
        </div>
    `);

    // Inmediatamente después de inyectarlo, lo buscamos en el DOM
    const fichaCreada = document.getElementById(`ficha-${id}`);
    const botonSuspender = fichaCreada.querySelector(`.btn-suspender`);

    // Le añadimos su evento individual (sin usar .style)
    botonSuspender.addEventListener(`click`, () => {
        fichaCreada.classList.toggle(`suspendido`);
        
        // Detalle pro: cambiar el texto del botón según si está suspendido o no
        if(fichaCreada.classList.contains(`suspendido`)) {
            botonSuspender.textContent = `Reactivar`;
            console.log(`Se ha desactivado el empleado: ${nombre}`);
        } else {
            botonSuspender.textContent = `Suspender`;
            console.log(`Se ha reactivado el empleado: ${nombre}`);
        }
    });
};

/**
 * 2. FUNCIÓN PRINCIPAL
 * Se encarga ÚNICAMENTE de gestionar el array y el temporizador.
 */
const iniciarAltaEmpleados = (empleados) => {
    // Protección básica
    if (!Array.isArray(empleados) || empleados.length === 0) return;

    let contador = 0; // Sacamos el contador FUERA del bucle

    const reloj = setInterval(() => {
        if (contador < empleados.length) {
            // Extraemos el empleado que toca en esta vuelta
            const empleadoActual = empleados[contador];
            
            // Llamamos a la otra función pasándole los datos.
            // Si el empleadoActual.puesto no existe (undefined), 
            // saltará automáticamente nuestro "Operario base".
            crearFicha(empleadoActual.nombre, empleadoActual.puesto);
            console.log(`Se ha procesado el empleado: ${empleadoActual.nombre}`)
            contador++; // Pasamos al siguiente para la próxima vuelta
        } else {
            // Cuando ya no quedan empleados, matamos el proceso
            clearInterval(reloj);
            console.log(`Todas las altas han sido procesadas.`);
        }
    }, 1500);
};

// Solo exportamos la función que necesita arrancar main.js
export { iniciarAltaEmpleados };