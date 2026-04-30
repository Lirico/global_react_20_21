import { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(false);

    const spanish = {
        title: "Titulo de la seccion",
        text: "Me gusta el pan con queso"
    }

    const english = {
        title: "Section Title",
        text: "I like cheese bread"
    }

    const languageSelected = language ? spanish : english

    const toggleFlag = language ? <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" fill="#FFFFFF" rx="4" />
        <clipPath id="circleView">
            <circle cx="20" cy="20" r="18" />
        </clipPath>

        <g clip-path="url(#circleView)">
            <rect y="0" width="40" height="10" fill="#AA151B" />
            <rect y="10" width="40" height="20" fill="#F1BF00" />
            <rect y="30" width="40" height="10" fill="#AA151B" />
            <circle cx="20" cy="20" r="4" fill="#AA151B" stroke="#F1BF00" stroke-width="1" />
        </g>
    </svg> : <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" fill="#00247D" rx="4" />
        <clipPath id="circleViewUK">
            <circle cx="20" cy="20" r="18" />
        </clipPath>

        <g clip-path="url(#circleViewUK)">
            <path d="M0 0 L40 40 M40 0 L0 40" stroke="#FFFFFF" stroke-width="6" />
            <rect x="17" y="0" width="6" height="40" fill="#FFFFFF" />
            <rect x="0" y="17" width="40" height="6" fill="#FFFFFF" />

            <path d="M0 0 L40 40 M40 0 L0 40" stroke="#CF142B" stroke-width="3" />
            <rect x="18.5" y="0" width="3" height="40" fill="#CF142B" />
            <rect x="0" y="18.5" width="40" height="3" fill="#CF142B" />
        </g>
    </svg>

    return (
        <LanguageContext.Provider value={{ language, languageSelected, setLanguage, toggleFlag }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider