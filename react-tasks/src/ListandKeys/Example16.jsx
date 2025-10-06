import React from 'react'
import User1 from './User1'
// import User from '../Routing/User'

const Example16 = () => {
    const users=['darshana','varsha','pratiksha','dhanshree']
  return (
    <div>
        {
            users.map((user,index)=>(
                <User1 key={index} name={user} i={index}></User1>
            ))
        }
    </div>
  )
}

export default Example16