"use strict";

const renderizarCatalogo = (listaProductos) => {
    // 1. Validación de seguridad
    if (!Array.isArray(listaProductos)) {
        console.error(`ERROR - NO ES UN ARRAY`);
        return;
    }

    // 2. Selección y vaciado del contenedor
    const catalogo = document.getElementById(`catalogo`);
    
    catalogo.innerHTML = "";

    // 3. Iteración sobre el array de objetos
    listaProductos.forEach((producto) => {
        // Desestructuramos el objeto directamente para no tener que escribir producto.nombre
        const { nombre, precio } = producto;

        // Evaluamos el precio para decidir la clase (usando un operador ternario)
        const claseCSS = precio > 50 ? "producto-caro" : "producto-barato";

        // Construimos el HTML inyectando la clase calculada y los datos
        const htmlProducto = `
            <div class="${claseCSS}"> 
                <p>Nombre: ${nombre}</p>
                <p>Precio: ${precio} €</p>
            </div>
        `;        

        // Inyectamos el bloque de texto HTML como último hijo del catálogo
        catalogo.insertAdjacentHTML('beforeend', htmlProducto);
    });
};

export { renderizarCatalogo };