import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter,setCounter] = useState(15)
  
  const addValue=() =>{
  
    setCounter(prevCounter=> prevCounter + 1)
    setCounter(prevCounter=> prevCounter + 1)
    setCounter(prevCounter=> prevCounter + 1)
    setCounter(prevCounter=> prevCounter + 1)
    console.log(counter,Math.random())
  }
  const removeValue = () =>{
    setCounter(counter - 1)
  }
  return (
    <>
      <div className='App'>
        <h1>React Counter {counter}</h1>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
