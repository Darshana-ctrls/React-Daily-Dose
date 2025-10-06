import React from 'react'

const User1 = ({name,i}) => {
  return (
    <div>
        <ul>
            <li>{i}.{name}</li>
        </ul>
    </div>
  )
}

export default User1