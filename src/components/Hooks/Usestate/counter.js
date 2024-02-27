import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Counter = () => {

    const [count, setCount] = useState(0);

    const handleClickIncrement = () =>{
        setCount(count+1);
    }
    
    // function handleClickIncrement(){
    //     setCount(count => count+1);
    // }

    const handleClickDecrement = () =>{
        setCount(count-1);
    }

    const handleClickReset = () =>{
        setCount(0);
    }

  return (
    <div className='border-4 border-red-600'> 
        <h1 className='text-5xl text-red-600'>Example 1. Counter</h1>
        <input className='border border-black' type='text' value={count}/>
        <button className="p-4 bg-green-400" onClick={()=>{
            handleClickIncrement();
            handleClickIncrement();
            handleClickIncrement();}
            }>+</button>
        <button className='p-4 bg-blue-400' onClick={handleClickDecrement}>-</button>
        <button className='p-4 bg-red-400' onClick={handleClickReset}>Reset</button>
    </div>
  )
}

export default Counter;