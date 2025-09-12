import React,{ useState } from "react"
import Child1 from "./Child1"
export const themeContext = React.createContext()

const Example3 = () => {
    const [theme, setTheme] = useState("light")
    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            <div>
                <h3>Usecontext example</h3>
                <Child1 />
            </div>
        </themeContext.Provider>
    )
}

export default Example3