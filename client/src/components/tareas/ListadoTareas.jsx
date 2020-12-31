import React, { useContext } from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoTareas = () => {

     // extraer proyectos del state inicial
     const proyectosContext = useContext( proyectoContext )
     const { proyecto, eliminarProyecto } = proyectosContext

     // si no hay proyecto seleccionado la primera vez que la pagina carga 
     if ( !proyecto )return <h2>Selecciona un proyecto</h2>

     // array descructuring para extraer el proyecto actual
     const [proyectoActual] =  proyecto

    const tareasProyecto = [
        { nombre: 'Elegir plataforma', estado: true },
        { nombre: 'Elegir colores', estado: false },
        { nombre: 'Elegir plataformas de pago', estado: false },
        { nombre: 'Elegir hosting', estado: true }
    ]

    // Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto( proyectoActual.id )
    }

    return (
        <h2>
            {/* <h2> Proyecto: Tienda Virtual</h2> */}
            <h2> Proyecto: { proyectoActual.nombre } </h2>

            <ul className="listado-tareas" >
                { tareasProyecto.length === 0 
                    ? ( <li className="tarea" ><p>No hay tareas</p></li> )
                    : tareasProyecto.map( tarea => (
                        <Tarea 
                            tarea= { tarea } 
                        />
                    ) ) 
                }
            </ul>

            <button
                type="button"   
                className="btn btn-eliminar"
                onClick={ onClickEliminar }
            >Eliminar proyecto &times;</button>
        </h2>
    )
}

export default  ListadoTareas