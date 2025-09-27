import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {id} = useParams()
  return (
    <div>
        <h4>Users List</h4>
        <p>User : {id}</p>
        
     </div>
  )
}

export default User