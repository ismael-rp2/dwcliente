import {} from 'react';

const Cumpleanos = ({nombre, fechaNacimiento}) => {
    const fechaObj = new Date(fechaNacimiento);
    const dia = fechaObj.getDate();
    const mes = fechaObj.getMonth() + 1;
    const anyo = fechaObj.getFullYear();

    const diaFormateado = String(dia).padStart(2, '0');
    const mesFormateado = String(mes).padStart(2, '0');

    const fechaFormateado = `${diaFormateado}/${mesFormateado}/${anyo}`;

    return (
        <>
            <div>
                <p>Fecha original: {fechaNacimiento}</p>
                <p>El cumpleaños de {nombre} es el {fechaFormateado}</p>
            </div>
        </>
    )
}

export default Cumpleanos
