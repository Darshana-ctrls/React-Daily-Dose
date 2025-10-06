import React from 'react'

const Example15 = () => {
    const users = [
        {id:1,Name:'Darshana',Age:'24'},
        {id:2,Name:'Varsha',Age:'25'}
    ]
  return (
    <div>
        <ol>
            {
                users.map((user)=>(
                    <li key={user.id}>{user.Name}</li>
                ))
            }
        </ol>
    </div>
  )
}

export default Example15