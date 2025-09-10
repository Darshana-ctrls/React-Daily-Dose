import React, { useState } from 'react'

const Example2 = ({title}) => {
    const [state,setState] = useState("On")
    function onSet() {
        setState((state)=>(state === "On" ?"Off":"On"))
    }

    return (
        <div>
            <h1>{title}</h1>
            <h3>{state}</h3>
            <button onClick={onSet}>Toggle state</button>
        </div>
    )
}

export default Example2