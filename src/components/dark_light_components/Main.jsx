// Paso 1 - Importar la nave
import { ThemeContext } from "../../context/ThemeContextProvider"
import { LanguageContext } from "../../context/LanguageContextProvider"
// Paso 2 - Importar al cartero
import { useContext } from "react"

const Main = () => {
    // Paso 3 - Usar al cartero para extraer los paquetes de la nave.
    const { toggleTheme } = useContext(ThemeContext);
    const { languageSelected } = useContext(LanguageContext);
    return (
        <main className={toggleTheme}>
            <h2>Main</h2>

            <section>
                <h2>{languageSelected.title}</h2>
                <p>{languageSelected.text}</p>
            </section>
        </main>
    )
}

export default Main