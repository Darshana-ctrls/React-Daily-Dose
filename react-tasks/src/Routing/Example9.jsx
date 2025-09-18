import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
const Example9 = () => {

    function About() {
        return <h2>About</h2>
    }
    function Home() {
        return <h1>Home</h1>
    }
    function Profile(){
        return <h2>Profile</h2>
    }
    function Settings(){
        return <h2>Settings</h2>
    }
    function Dashboard() {
        return (
            <div>
                <h1>Welcome to Dashboard</h1>

               
                <nav>
                    <Link to='Settings'>Settings</Link>|{' '}
                    <Link to='Profile'>Profile</Link>
                </nav>

                <Outlet/>
            </div>

            
        )
    }

    return (
        <BrowserRouter>
            <nav>
                <Link to='/'>Home</Link> | {' '}
                <Link to='/About'>About</Link> |{' '}
                <Link to='/Dashboard'>Dashboard</Link>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />

                {/*wildcard routes*/}
                <Route path='*' element={<Home />}></Route>

                {/* nested routes */}
                <Route path='/Dashboard' element={<Dashboard />}>
                    <Route path='Profile' element={<Profile />} />
                    <Route path='Settings' element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Example9