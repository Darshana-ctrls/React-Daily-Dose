import React from 'react'
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom'
import User from './User'
const Example10 = () => {
  
  return (
    <>


      <BrowserRouter>
        <div>
          <h1>Home Page</h1>
          <nav>
            <Link to='/User/1'>User 1</Link>
            <Link to='/User/2'>User 2</Link>
            <Link to='/User/3'>User 3</Link>
          </nav>
        </div>

        <Routes>
          {/* <Route path='/'>Home</Route> */}
          <Route path='/User/:id' element={<User></User>} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default Example10