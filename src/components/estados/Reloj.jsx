import { useState, useEffect } from "react"


// Vamos a utilizar un conditional render
// Significa que vamos a mostrar un elemento basado en una condicion

// Acá es donde entra nuestro nuevo hook -> useEffect
// useEffect nos permite ejecutar codigo en momentos específicos de la vida de un componente
// Por ejemplo, cuando se monta, cuando se actualiza, o cuando se desmonta

// EL CICLO DE VIDA DE UN COMPONENTE

const Reloj = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [itsVisible, setItsVisible] = useState(false);

    // Cuando el arreglo del segundo argumento del useEffect est
    useEffect(() => {

        let temporizador;

        if (itsVisible) {
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString());
            }, 1000);
        }

        return () => clearInterval(temporizador);

    }, [itsVisible]);

    return (
        <>
            <h2>Relojito</h2>
            {itsVisible ? <h3>{hora}</h3> : null}
            <div>
                <button onClick={() => setItsVisible(!itsVisible)}>Iniciar/Detener</button>
            </div>
        </>
    )
}

export default Reloj



// Si usamos un componente de clase en lugar de un componente funcional
// necesitamos 3 diferentes funciones para representar el ciclo
// de vida de un componente.
// componenteDidMount()
// componentDidUpdate()
// componenteDidUnmount()

// getState()
// setState()