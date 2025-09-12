import React from 'react'
import { useContext } from 'react'
import {themeContext} from './Example3'

const Child1 = () => {
    const { theme, setTheme } = useContext(themeContext)

    return (
        <div>
            <h4>Current theme is  {theme}</h4>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle theme</button>
        </div>
    )
}

export default Child1