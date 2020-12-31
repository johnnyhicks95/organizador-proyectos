import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto'

import proyectoContext from '../../context/proyectos/proyectoContext'

export const ListadoProyectos = () => {

    /* se lleva a proyectoState 
    const proyectos = [
        { nombre: 'Tienda de ropa' },
        { nombre: 'Intranet' },
        { nombre: 'Diseño de sitio web' },
    ] */

    // extraer proyectos del state inicial
    const proyectosContext = useContext( proyectoContext )
    const { proyectos, obtenerProyectos } = proyectosContext

    // obetener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos()
    }, [ ])

    // revisa si hay proyectos
    if ( proyectos.length === 0 ) return <p>No hay proyectos, comienza creando uno</p>;


    return (
        <ul className="listado-proyectos" >

            { proyectos.map( proyecto => (
                 
                <Proyecto 
                    key = { proyecto.id }
                    proyecto = { proyecto }
                />
            ) ) }
        </ul>
    )
}

export default ListadoProyectos