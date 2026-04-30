// Paso 1 - Importar la funcion creadora de contextos.
import { createContext, useState } from "react";

// Paso 2 - Crear el contexto (la nave) y exportar
export const ThemeContext = createContext();
// Imaginen el contexto como un array
// Las props se coleccionarian allí.


const ThemeContextProvider = ({ children }) => {

    // Paso 3 - Definimos un estado y sus partes serán los paquetes.
    // Es decir, theme y setTheme.
    const [theme, setTheme] = useState(false);

    const toggleTheme = theme ? "dark" : "light"
    const toggleIcon = theme ? "🌙" : "☀️"

    // Paso 4 - Definimos el proveedor del contexto (el flaco de la gorra)
    // Paso 5 - Destructuramos los children (lista de componentes que pueden acceder
    // al paquete) y lo colocamos dentro del envolgorio del provider.
    // Paso 6 - Agregar las props al value del povider (Ponerle el paquete en la mano al flaco)
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, toggleIcon, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider

