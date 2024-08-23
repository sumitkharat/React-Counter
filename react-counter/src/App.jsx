import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(46)

const addValue=()=>{

  setCount((prev)=> prev+1)
}

const subValue=()=>{
setCount(count-1)
}

  return (
    <>
<div className='bg-slate-600'>
      <h1 className='text-9xl text-white px-1 py-3'>Hey Sumit : {count}</h1>
      <h2 className='text-white'>Header : {count}</h2>

      
        <button onClick={addValue} className='bg-slate-900 px-2 py-2 text-white rounded-md'>Add Value : {count}</button>
      {"      "}
        <button onClick={subValue} className='bg-slate-900  mx-2 py-2 px-2  text-white rounded-md'>Sub Value : {count}</button>
      

      <p className='text-white'>Footer : {count}</p>
      </div>
    </>
  )
}

export default App
