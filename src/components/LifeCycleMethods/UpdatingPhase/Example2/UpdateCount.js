import React, { useState } from 'react'
import Counter1 from './Counter1';
import Counter2 from './Counter2';

function UpdateCount() {
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);

    const increaseCounter1 = () =>{
        setCounter1(counter1 + 1);
    };
    const increseCounter2 = () =>{
        setCounter2(counter2 + 1);
    }

  return (
    <div className='text-center text-4xl'>
    <h1 className='text-center text-6xl'>Example 2</h1>
    <h1 className='text-center text-yellow-700 text-3xl' >Counter</h1>
      <div><Counter1 value={counter1} onClick={increaseCounter1}/></div> 
      <div><Counter2 value={counter2} onClick={increseCounter2}/></div> 
    </div>
  )
}

export default UpdateCount