import React from 'react'
import Barra from '../layout/Barra'
import Sidebar from '../layout/Sidebar'
import FormTarea from '../tareas/FormTarea'

export const Proyectos = () => {
    return (
        <div className="contenedor-app" >
            <Sidebar />

            <div className="seccion-principal" >
                <Barra /> 
                <main>
                    <FormTarea />
                    <div className="seccion-tareas" >
 
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos