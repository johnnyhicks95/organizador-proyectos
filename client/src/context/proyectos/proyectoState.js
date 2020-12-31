// contiene las funciones con dispatch para el context
import React, { useReducer } from 'react'
import uuid from 'uuid'
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import  { 
    FORMULARIO_PROYECTO ,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO
    } from '../../types'



export const ProyectoState = ( props ) => {

    const proyectos = [
        { id: 1, nombre: 'Tienda de ropa' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de sitio web' },
    ]

    const initialState = {
        proyectos: [ ], 
        formulario: false
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer( proyectoReducer , initialState)

    // serie de funciones para el CRUD
    const mostrarFormulario = (  )=> {
        dispatch ({
            type: FORMULARIO_PROYECTO
        })
    }

    // obtener los proyectos
    const obtenerProyectos = ( ) => {
        dispatch ({ 
            type: OBTENER_PROYECTOS,
            payload: proyectos
         })
    }

    // Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid.v4(); // agrega un id

        // inserta el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto 
        })
    }

    return (
        <proyectoContext.Provider 
            value={{
                // estado
                proyectos: state.proyectos,
                formulario: state.formulario,

                // funciomes
                mostrarFormulario, 
                obtenerProyectos,
                agregarProyecto
            }}
        >
            { props.children }
        </proyectoContext.Provider>
    )
}

export default ProyectoState