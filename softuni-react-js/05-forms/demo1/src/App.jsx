import { useState } from 'react'
import UncontrolledForm from './components/UncontrolledForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UncontrolledForm />
    </>
  )
}

export default App
