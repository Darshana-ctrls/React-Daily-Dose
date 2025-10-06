import React from 'react'

const Example14 = () => {
    const fruits = ['Orange','Mango','Guava']
  return (
    <div>
        <ul>
            {
                fruits.map((x,index)=>(
                    <li key={index}>{index} {x}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Example14