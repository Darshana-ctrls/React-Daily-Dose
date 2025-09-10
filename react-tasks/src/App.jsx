import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example1 from './stateandprops/Example1'
import Example2 from './stateandprops/Example2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Example1 title='Counter'></Example1>
      <Example2 title='OnOff'></Example2>
    </>
  )
}

export default App
