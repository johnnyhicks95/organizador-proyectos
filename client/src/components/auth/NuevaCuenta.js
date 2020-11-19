import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const NuevaCuenta = () => {

    // state para iniciar sesion
    const [usuario, guardarUsuario] = useState({ 
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    const { nombre , password, confirmar, email } = usuario

    const onChange = ( e ) => {

        guardarUsuario({
            ...usuario,
            [ e.target.name ] : e.target.value
        })
    }

    // cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault()

        // validar que no haya campos vacios

        // password minomp de 6 caracteres

        // ambos passwords sean iguales

        //pasarlo al action

    }

    return (
        <div className="form-usuario" >
            <div className="contenedor-form sombra-dark" >
                <h1>Obtener cuenta</h1>

                <form onSubmit={ onSubmit } >
                    <div className="campo-form" >
                        <label htmlFor="nombre" >Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={ nombre }
                            onChange={ onChange }
                        />
                    </div>

                    <div className="campo-form" >
                        <label htmlFor="email" >Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu email"
                                value={ email }
                                onChange={ onChange }
                            />
                    </div>

                    <div className="campo-form" >
                        <label htmlFor="password" >Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Tu password"
                                value={ password }
                                onChange={ onChange }
                            />
                    </div>

                    <div className="campo-form" >
                        <label htmlFor="confirmar" >Confirmar password</label>
                            <input
                                type="password"
                                id="confirmar"
                                name="confirmar"
                                placeholder="Repite tu password"
                                value={ confirmar }
                                onChange={ onChange }
                            />
                    </div>

                    <div className="campo-form" >
                        <input type="submit" className="btn btn-primario btn-block "
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta" >
                    Volver a iniciar sesión
                </Link>
            </div>
        </div>
    )
}

export default NuevaCuenta
