import { useState } from "react"


const initialState = 0;

const Contador = () => {
    const [contador, setContador] = useState(initialState)

    const incrementar = () => setContador((prevContador) => prevContador + 1)
    const resetear = () => setContador(initialState)
    const decrementar = () => setContador((prevContador) => prevContador - 1)

    return (
        <>
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={resetear}>0</button>
                <button onClick={incrementar}>+</button>
            </div>
            <h3>{contador}</h3>

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

export default Contador

