import React, { useRef } from 'react'

const Example5 = () => {
    const inputRef = useRef(null)
    function setFocus(){
        inputRef.current.focus()
    }
  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={setFocus}>Click me</button>
    </div>
  )
}

export default Example5