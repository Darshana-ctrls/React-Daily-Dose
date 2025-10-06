import React from 'react'

const Example13 = () => {
    // const user = {name:'Darshana',isAdmin:true}
   const isLoggedIn = true
  return (
    <div>
        <h5>Conditional Rendering</h5>
        <div>{isLoggedIn ? <h6>Hello</h6> : <h6>No logged in</h6>}</div>
    </div>
  )
}

export default Example13