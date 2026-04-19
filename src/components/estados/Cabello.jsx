// Poder manipular un estado necesitamos una funcion nativa
// de react llamada useState.
// useState es un HOOK y uno de los tantos HOOKs que tiene React.
import {useState} from 'react';

// Goku por defecto tiene el cabello morocho.
// Por lo tanto podemos asumir que morocho es el estado
// inicial de su cabello.

// Y por lo tanto tambien podemos asumir que cada una de
// sus transformaciones es una actualizacion de su estado.

const Cabello = () => {

  // La variable que esta de color violeta es el estado inicial.
  // La funcion que esta de color verde es la funcion actualizadora
  // del estado inicial.
  // Y la funcion que está del otro lado del = es el mismisimo hook.
  // En el argumento del hook useState va el valor inicial del estado.
  const initialState = "Morocho"

  const [cabello, setCabello] = useState(initialState);

  return (
    <>
        <h3>{cabello}</h3>
        <button onClick={() => setCabello("Rubio")}>SSJ</button>
        <button onClick={() => setCabello("Rubio con rashitos")}>La transformacion que supera al super SSJ</button>
        <button onClick={() => setCabello("Rubio con rashitos y melena")}>La transofrmacion que supera al SSJ y al mas fuerte</button>
        <button onClick={() => setCabello("Picolo pregunta")}>¿Estas diciendo que pudes hacer una transformacion que supera los poderes del SJJ y del mas fuerte?</button>
        <button onClick={() => setCabello("Krillin se sorprende")}>No te creo Goku, estas mintiendo</button>
        <button onClick={() => setCabello(initialState)}>Si continuas con esa transformacion tu estancia en la tierra se hara mas corta!</button>
    </>
  )
}

export default Cabello