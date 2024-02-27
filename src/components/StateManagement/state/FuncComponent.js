import React, { useState } from 'react'

const FuncComponent = () => {
    const [carName,setCarName] = useState('');
  return (
    <div className='text-center'>
        <h1 className='text-3xl'>This is Functional Component</h1>
        <input className='bg-green-400' type='text' onChange={(e)=>setCarName(e.target.value)}/>
        <h1>My car's name is {carName}</h1>
    </div>
  )
}

export default FuncComponent