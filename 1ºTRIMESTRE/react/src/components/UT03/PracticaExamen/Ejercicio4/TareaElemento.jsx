import {} from 'react';

const TareaElemento = ({titulo, estado}) => {
  return (
   <>
        <li>
          {titulo} - {estado ? "Completada" : "Pendiente..."}
        </li>
   </>
  );
};

export default TareaElemento
