import React from 'react'
import Proyecto from './Proyecto'

export const ListadoProyectos = () => {

    const proyectos = [
        { nombre: 'Tienda de ropa' },
        { nombre: 'Intranet' },
        { nombre: 'Diseño de sitio web' },
    ]

    return (
        <ul className="listado-proyectos" >

            { proyectos.map( proyecto => (
                 
                <Proyecto 
                    proyecto = { proyecto }
                />
            ) ) }
        </ul>
    )
}

export default ListadoProyectos