// Archivo: Discente.jsx
import React from 'react';

const Discente = ({ nombre, apellidos, curso, aficiones, comida, funcionDesmatricular }) => {
    return (
        <div className="tarjeta-discente" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>{apellidos}, {nombre}</h3>
            <p><strong>Curso:</strong> {curso} | <strong>Comida:</strong> {comida}</p>
            <p><strong>Aficiones:</strong> {aficiones?.join(", ")}</p>
            <button onClick={funcionDesmatricular} style={{ backgroundColor: "#ff4d4d", color: "white" }}>
                Desmatricular
            </button>
        </div>
    );
};

export default Discente;