import React, { useRef, useState } from 'react'

const Example6 = () => {

    const [count,setCount]=useState(0)
    const renderCountref=useRef(0)

    renderCountref.current +=1
    
  return (
    <div>
        <p>count : {count}</p>
        <p>Render Count : {renderCountref.current}</p>
        <button onClick={()=>setCount(c=>c+1)}>Click me to see render count</button>
    </div>
  )
}

export default Example6