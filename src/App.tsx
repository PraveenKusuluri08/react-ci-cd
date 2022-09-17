import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from "./components/button/Button"
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
      <br/>
      <Button title="Click Here"/>
    </div>
  )
}

export default App
