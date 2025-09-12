import React, { useEffect, useState } from 'react'

const Example8 = () => {

    const [timer,setTimer] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer(s=>s+1)
        },1000)

        return ()=> clearInterval(interval)
    },[]); // dependency array ensures effect runs only once

  return (
    <div>
        <p>Time : {timer}</p>
    </div>
  )
}

export default Example8