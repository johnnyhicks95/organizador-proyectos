// viene desde state
import  { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO
} from '../../types'

export default ( state, action ) => {
    switch ( action.type ) {
        case FORMULARIO_PROYECTO: 
            return {
                ...state,
                formulario: true,
            }
        case OBTENER_PROYECTOS:
            return { 
                ...state,
                proyectos: action.payload
            }

        case AGREGAR_PROYECTO:
            return { 
                ...state,
                proyectos: [ ...state.proyectos, action.payload],
                formulario: false,
                errorformluario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformluario: true
            }
        default:
            return state; 
    }
}