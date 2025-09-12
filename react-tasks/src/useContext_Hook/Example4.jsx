import React, { useState } from 'react'
import Message from './Message'
export const languageContext = React.createContext()

const Example4 = () => {
    const [language, setLanguage] = useState("en")
    return (
        <languageContext.Provider value={{language,setLanguage}}>
            <div>
                <h2>My Language Switcher</h2>
                <button onClick={() => setLanguage("en")}>English</button>
                <button onClick={() => setLanguage("ma")}>Marathi</button>
                <Message />
            </div>
        </languageContext.Provider>
    )
}

export default Example4