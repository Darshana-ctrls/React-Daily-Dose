import React, { useEffect, useState } from 'react'

const Example7 = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log("Count",count)
    });

  return (
    <div>
        <h6>Count : {count}</h6>
        <button onClick={()=>setCount(c=>c+1)}>Click me</button>
    </div>
  )
}

export default Example7