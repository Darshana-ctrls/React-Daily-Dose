import React, { useState } from 'react'

const Example12 = () => {
    const [text,setText]=useState("")
    function sayHello(name){
        setText(name)
    }
  return (
    <div>
        <button onClick={()=>sayHello("radha")}>Click to set Text</button>
        <p>Hello {text}</p>
    </div>
  )
}

export default Example12