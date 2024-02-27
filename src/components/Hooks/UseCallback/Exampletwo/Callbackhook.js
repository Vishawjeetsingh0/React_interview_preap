import React, { useCallback, useState } from 'react'
import Childfor from './Childfor';

const Callbackhook = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);

    const Learning = useCallback(() => {

    },[count]) 

  return (
    <div className='text-center text-3xl'>
        <h1>useCallback expample 2</h1>
        <Childfor Learning={Learning} count={count}/>
        <button className='bg-blue-300 m-2 p-2' onClick={()=>setAdd(add + 1)}>Add : {add}</button>
        <button className='bg-pink-300 m-2 p-2' onClick={()=>setCount(count + 2)}>Count : {count}</button>
    </div>
  )
}

export default Callbackhook