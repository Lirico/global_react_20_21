import { TYPES } from "./actions"

export const reducer = (state, action) => {
    // El objeto de accion trae entre otras cosas el dato que nos permite ubicar
    // el caso en cuestion dentro del switch case.
    // El del caso en cuestion viene especificamente en la propiedad type del objeto action.
    switch (action.type) {
        case TYPES.INCREMENTAR: {
            return {
                ...state,
                contador: state.contador + 1
            }
        }
        case TYPES.DECREMENTAR: {
            return {
                ...state,
                contador: state.contador - 1
            }
        }
        case TYPES.RESETEAR: {
            return {
                ...state,
                contador: 0
            }
        }
        case TYPES.ALTERNAR_VISIBILIDAD: {
            return {
                ...state,
                visible: !state.visible
            }
        }
        default:
            return state;
    }
}