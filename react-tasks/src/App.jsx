import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example1 from './stateandprops/Example1'
import Example2 from './stateandprops/Example2'
import Example3 from './useContext_Hook/Example3'
import Example4 from './useContext_Hook/Example4'
import Example5 from './useRef_Hook/Example5'
import Example6 from './useRef_Hook/Example6'
import Example7 from './useEffect_Hook/Example7'
import Example8 from './useEffect_Hook/Example8'
import Example9 from './Routing/Example9'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Example1 title='Counter'></Example1> */}
      {/* <Example2 title='OnOff'></Example2> */}
      {/* <Example3></Example3> */}
      {/* <Example4></Example4> */}
      {/* <Example5></Example5> */}
      {/* <Example6></Example6> */}
      {/* <Example7></Example7> */}
      {/* <Example8></Example8> */}
      <Example9></Example9>
    </>
  )
}

export default App
