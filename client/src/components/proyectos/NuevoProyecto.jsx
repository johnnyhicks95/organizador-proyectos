import React, { useState } from 'react'

export const NuevoProyecto = () => {

    // state para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })

    const { nombre } = proyecto  

    // lee los contenidos ddel input
    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario enía un proyecto
    const onSubmitProyecto = e =>{
        e.preventDefault()

        // validar el proyecto
        

        // agregar a lstate


        // reiniciar el form
    }

    return (
        <>
            <button type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto </button>

            <form className="formulario-nuevo-proyecto" 
                onSubmit={ onSubmitProyecto }
            >
                <input type="text"
                    classname="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value = { nombre }
                    onChange={ onChangeProyecto }
                /> 
                <input 
                    type="submit"
                    classname="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />
            </form>
        </>
    )
}

export default NuevoProyecto