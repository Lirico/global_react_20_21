import { useReducer } from "react"
import { TYPES } from "@/reducer/actions";
import { initialState } from "@/reducer/initialState";
import { reducer } from "@/reducer/reducer";



const ContadorReducer = () => {
    const { INCREMENTAR, DECREMENTAR, RESETEAR, ALTERNAR_VISIBILIDAD } = TYPES;

    const [state, dispatch] = useReducer(reducer, initialState)

    const incrementar = () => dispatch({ type: INCREMENTAR, payload: 10 })
    const resetear = () => dispatch({ type: RESETEAR })
    const decrementar = () => dispatch({ type: DECREMENTAR, payload: 10 })
    const alternarVisibilidad = () => dispatch({ type: ALTERNAR_VISIBILIDAD })

    return (
        <>
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={resetear}>0</button>
                <button onClick={incrementar}>+</button>
                <button onClick={alternarVisibilidad}>Mostrar/Ocultar</button>
            </div>
            {state.visible && <h3>{state.contador}</h3>}

            <style jsx>{`
                div {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                }
                h3 {
                    text-align: center;
                }
            `}</style>
        </>
    )
}

export default ContadorReducer


