// Paso 1 - Importar la nave
import { ThemeContext } from "../../context/ThemeContextProvider"
import { LanguageContext } from "@/context/LanguageContextProvider";
// Paso 2 - Importar al cartero
import { useContext } from "react"


const Header = () => {
    // Paso 3 - Usar al cartero para extraer los paquetes de la nave.
    const { theme, toggleTheme, toggleIcon, setTheme } = useContext(ThemeContext);
    const { language, setLanguage, toggleFlag } = useContext(LanguageContext);

    return (
        <header className={toggleTheme}>
            <button onClick={() => setTheme(!theme)}>{toggleIcon}</button>
            <button onClick={() => setLanguage(!language)}>{toggleFlag}</button>
        </header>
    )
}

export default Header