import React from "react";
import "./interprete.css";

const interprete = (props) => {
    // JavaScript Vanilla

    return(
        //JSX
        <>
        <div className="interprete-contenedor">
            <img src={props.imagen} />
            <h2>{props.nombre}</h2>
            <h4>{props.descripcion}</h4>
        </div>
        </>
    );
};
export default interprete;