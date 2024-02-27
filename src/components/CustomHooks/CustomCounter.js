import React from 'react'
import { useCounter } from './useCounter'

const CustomCounter = () => {
    const [count,increment,Decrement] = useCounter();
  return (
    <div className='text-center'>
    <h1>Custom-Hooks</h1>
    <h1 className='text-4xl'>{count}</h1>
    <button className="m-2 p-2 bg-green-500" onClick={increment}>increment</button>
    <button className="m-2 p-2 bg-red-500" onClick={Decrement}>decrement</button>
    </div>
  )
}

export default CustomCounter