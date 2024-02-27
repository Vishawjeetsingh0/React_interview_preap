import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice';

const CounterRedux = () => {
    const count = useSelector((store)=>store.counter.value)
    const dispatch = useDispatch();
  return (
    <div className='text-center'>
        <h1 className='text-3xl'>Counter</h1>
        <span className='text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>{count}</span>
        <div>
        <button className='bg-green-700 m-2 p-2' onClick={()=>dispatch(increment())}>+</button>
        <button className='bg-red-700 m-2 p-2'  onClick={()=>dispatch(decrement())}>-</button>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 m-2 p-2 text-white'  onClick={()=>dispatch(reset())}>reset</button>
   </div>
    </div>
  )
}

export default CounterRedux