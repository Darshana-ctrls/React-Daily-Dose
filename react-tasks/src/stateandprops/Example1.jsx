import React, { useState } from 'react'

const Example1 = ({title}) => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>{title}</h1>
        <h5>{count}</h5>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Example1