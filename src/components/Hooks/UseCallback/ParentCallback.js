import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback';

const ParentCallback = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState([]);

  function  IncrementcounterOne(){
        setCounterOne(counterOne + 1)
    }

    // const multiCounterOne = () =>{
    //     console.warn("counter me 5 se multiply ho rha hai")
    //    return counterOne *5
       
    // }

    const multiCounterOne = useCallback(() =>{
            console.warn("counter me 5 se multiply ho rha hai")
           return counterOne *5
        },[counterTwo])

  return (
    <div className='text-center text-3xl border-4 border-blue-500'>
        <h1>Parent Component</h1>
        <h1>CounterOne X 5 = {multiCounterOne()}</h1>
        <ChildCallback counterTwo={counterTwo} multiCounterOne={multiCounterOne}/>
        <button className='bg-yellow-600 m-2 p-2' onClick={IncrementcounterOne} >count : {counterOne} </button>
    </div>
  )
}

export default ParentCallback

