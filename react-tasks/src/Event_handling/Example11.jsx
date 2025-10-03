import React, { useState } from 'react'

const Example11 = () => {
    const [text,setText]=useState("")
    function handleClick(){
        console.log("clicked")
    }

    function handleChange(e){
        console.log(e)
        setText(e.target.value)
    }

  return (
    <div>
        <button onClick={handleClick}>Click me</button>

        <input onChange={handleChange} />
        <p>Text you typed : {text}</p>

    </div>
  )
}

export default Example11