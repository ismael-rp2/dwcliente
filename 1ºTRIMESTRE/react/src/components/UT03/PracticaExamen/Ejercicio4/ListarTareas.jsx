import TareaElemento from './TareaElemento';

const ListarTareas = ({ tareas }) => {
  return (
    <div>
        <ul>
            {tareas.map((valor, indice) => (
                
                /* AQUÍ ESTÁ LA MAGIA: Le pasamos los datos explícitamente */
                <TareaElemento 
                    key={indice} 
                    titulo={valor.titulo} 
                    estado={valor.estado} 
                />
                
            ))}
        </ul>
    </div>
  )
}

export default ListarTareas;