// Paso 1 - Importar la nave
import { ThemeContext } from "../../context/ThemeContextProvider"
// Paso 2 - Importar al cartero
import { useContext } from "react"


const Footer = () => {
    // Paso 3 - Usar al cartero para extraer los paquetes de la nave.
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <footer className={toggleTheme}>
            <h2>Footer</h2>
        </footer>
    )
}

export default Footer