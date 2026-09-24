import React from "react";
import "./Pelicula.css";

const Pelicula = (props) => {
    //JS

    return (
        <>
            <section>
            <h2>{props.titulo}</h2>
                <p>{props.direccion}</p>
            </section>
            <section>
                <img src={props.imagen}></img>
                <p></p>
            </section>
        </>
    );
};

export default Pelicula;