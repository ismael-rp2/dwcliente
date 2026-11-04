# Resumen: UT04 Document Object Model y Ciclo de Vida

## Índice
1. [Visión General del Tema 4: BOM y DOM](#1-visión-general-del-tema-4-bom-y-dom)
    - [Browser Object Model (BOM)](#browser-object-model-bom)
    - [Document Object Model (DOM) y Referencias Vivas vs Muertas](#document-object-model-dom-y-referencias-vivas-vs-muertas)
    - [Tipos de Nodos y Propiedades](#tipos-de-nodos-y-propiedades)
2. [Métodos Más Repetidos y Cómo Usarlos (con ejemplos)](#2-métodos-más-repetidos-y-cómo-usarlos-con-ejemplos)
    - [A. Selección de Elementos y Validaciones (If/Else)](#a-selección-de-elementos-y-validaciones-ifelse)
    - [B. Modificación de Atributos, Clases y Estilos](#b-modificación-de-atributos-clases-y-estilos)
    - [C. Creación, Inserción y Eliminación de Elementos](#c-creación-inserción-y-eliminación-de-elementos)
    - [D. Virtual DOM y React (useRef)](#d-virtual-dom-y-react-useref)
3. [Patrones Prácticos Frecuentes (Ejercicios)](#3-patrones-prácticos-frecuentes-ejercicios)
4. [Estructuración del Proyecto: Carpetas y Archivos](#4-estructuración-del-proyecto-carpetas-y-archivos-proyectovanilla)
5. [🚫 LO QUE NO SE PUEDE USAR / ESTÁ PROHIBIDO USAR](#5--lo-que-no-se-puede-usar--está-prohibido-usar)

---

## 1. Visión General del Tema 4: BOM y DOM

El **BOM** (Browser Object Model) y el **DOM** (Document Object Model) conforman la API fundamental para interactuar con el navegador y la página web.

### Browser Object Model (BOM)
Representa el entorno del navegador y tiene como raíz el objeto `window`.
- Contiene subobjetos clave como `location` (URL actual), `navigator` (información del navegador), `history`, `screen` y `document`.
- Gestiona métodos globales y temporizadores como `setTimeout()` (una vez) y `setInterval()` (bucle).

### Document Object Model (DOM) y Referencias Vivas vs Muertas
Es una estructura en forma de árbol invertido cuya raíz es `document`. Permite navegar por los nodos del HTML y modificar su contenido.

⚠️ **Concepto Clave: Referencias Vivas vs. Muertas**
Al seleccionar elementos del DOM, debemos tener clara la diferencia:
- **Referencias muertas (Estáticas):** `document.querySelectorAll("p")` solo selecciona los párrafos que existen en el momento exacto en que se ejecuta la línea. Si luego JavaScript añade un nuevo párrafo, esa variable no se enterará.
- **Referencias vivas (Dinámicas):** `document.getElementsByTagName("p")` genera una colección viva. Si el DOM cambia añadiendo un párrafo, la variable se actualiza automáticamente.

### Tipos de Nodos y Propiedades
El DOM organiza la página en nodos diferenciados por su tipo (`nodeType`):
1. **Element (`nodeType === 1`)**: Representa las etiquetas HTML (`<div>`, `<p>`, `<h1>`, etc.).
2. **Attr (`nodeType === 2`)**: Forma parte de un elemento representando sus atributos.
3. **Text (`nodeType === 3`)**: Contiene el texto dentro de una etiqueta y no puede tener nodos hijos.

**Navegación relativa entre nodos:** `parentNode`, `firstChild`, `lastChild`, `previousSibling` y `nextSibling`.

---

## 2. Métodos Más Repetidos y Cómo Usarlos (con ejemplos)

### A. Selección de Elementos y Validaciones (If/Else)
Para interactuar con la interfaz, primero seleccionamos el nodo:
- `document.getElementById(id)`: Devuelve un elemento o `null`.
- `document.querySelector(selectorCSS)`: Devuelve el primer elemento coincidente.
- `document.querySelectorAll(selectorCSS)`: Devuelve un `NodeList` estático.

**Validación esencial (Evitar errores `undefined`):**
Nunca asumas que un elemento en un array del DOM existe. Valida siempre la longitud (`length`) mediante ternarias o `if/else`.

```javascript
const parrafos = document.querySelectorAll("p");

// Acceder al segundo párrafo (índice 1) de forma segura:
const textoSegundo = parrafos.length >= 2 ? parrafos[1].textContent : "No hay un segundo párrafo.";

// Acceder al penúltimo enlace de la página de forma segura:
const enlaces = document.querySelectorAll("a");
const penultimo = enlaces.length >= 2 ? enlaces[enlaces.length - 2].href : "Faltan enlaces";
```

### B. Modificación de Atributos, Clases y Estilos
- **Atributos:** `getAttribute(nombre)` y `setAttribute(nombre, valor)`.
- **Clases CSS (`classList`):** `.add(clase)`, `.remove(clase)`, `.toggle(clase)`, `.contains(clase)`.
- **Estilos CSS directamente (Inline):** Propiedades con guiones pasan a *camelCase* (`background-color` -> `backgroundColor`).

```javascript
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "¡Texto inyectado dinámicamente!";
// Aplicar un estilo de color azul
nuevoParrafo.style.color = "blue";
```

### C. Creación, Inserción y Eliminación de Elementos
- `document.createElement(etiqueta)`: Crea un nuevo nodo en memoria.
- `padre.appendChild(nuevoNodo)`: Añade el nodo como último hijo.
- `elemento.insertAdjacentHTML(posicion, htmlString)`: Inyecta string HTML (Uso ideal: `'beforeend'` para añadir dentro al final).
- `padre.insertBefore(nuevoElemento, nodoReferencia)`: Inserta justo antes de un nodo.

**Crear la función inexistente `insertAfter`:**
El DOM no tiene método `insertAfter`. Para insertar *después* de un elemento, insertamos *antes* de su hermano siguiente (`nextSibling`).

```javascript
const insertAfter = (nuevoElemento, existenteElemento) => {
    const padre = existenteElemento.parentNode;
    // Si no tiene hermano siguiente (es el último), nextSibling es null
    // e insertBefore lo añadirá al final perfectamente.
    padre.insertBefore(nuevoElemento, existenteElemento.nextSibling);
};
```

### D. Virtual DOM y React (useRef)
React actualiza el DOM mediante el cálculo de diferencias (*diffing*) en su Virtual DOM. Si necesitamos acceder a un nodo físico del DOM directamente sin causar redibujados, se usa el hook `useRef`.

---

## 3. Patrones Prácticos Frecuentes (Ejercicios)

**1. Generar un Número Aleatorio en un Rango (ej. 1 a 1000)**
```javascript
// Math.random() genera de 0 a 0.99. 
// Fórmula: Math.floor(Math.random() * (Max - Min + 1)) + Min;
const numero = Math.floor(Math.random() * 1000) + 1;
```

**2. Inyectar datos con `setInterval` desde un Array de forma segura**
Para evitar que un `setInterval` corra al infinito y ponga `undefined` al acabarse el array, se debe comprobar el límite y limpiar el intervalo con `clearInterval()`.

```javascript
import { quijoteFrases } from './diccionario.js';

const tbody = document.getElementById("bodyTabla");
// Limpieza inicial segura sin machacar contenedores enteros
if (tbody) tbody.innerHTML = ""; 

let contador = 0;
const intervalo = setInterval(() => {
    if (contador < quijoteFrases.length) {
        const filaHtml = `<tr><td>${quijoteFrases[contador]}</td></tr>`;
        tbody.insertAdjacentHTML('beforeend', filaHtml);
        contador++;
    } else {
        clearInterval(intervalo); // Se acabó el array, paramos el reloj
    }
}, 1000);
```

---

## 4. Estructuración del Proyecto: Carpetas y Archivos

```text
proyecto/
├── index.html              # Punto de entrada (Contenedores vacíos <div id="info"></div>)
├── src/                    
│   ├── principal.js        # Ejecuta la lógica (importa módulos, manipula el DOM general)
│   └── biblioteca.js       # Exporta funciones puras o temáticas (cálculos, formatos)
```
- El `index.html` vincula el JS principal usando `<script type="module" src="./src/principal.js"></script>`.

---

## 5. 🚫 LO QUE NO SE PUEDE USAR / ESTÁ PROHIBIDO USAR

1. **Mutar Arrays Originales:** Prohibido `.push()`, `.pop()`, `.sort()`. Se exige el uso del operador *spread* (`...`), `.map()`, `.filter()` o `.toSorted()`.
2. **Confundir `forEach` y `map`:** No uses `map` si no vas a retornar algo. Usa `map` para transformar (inmutabilidad) y `forEach` para iterar con efectos secundarios.
3. **Métodos Obsoletos del BOM:** Prohibido `window.alert()`, `window.prompt()` o `window.confirm()` (bloquean el hilo de ejecución).
4. **Eventos Inline:** Prohibido escribir `onclick=""` directamente en el archivo HTML.