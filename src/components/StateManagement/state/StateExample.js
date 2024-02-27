import React from 'react'
import ClassComponent from './ClassComponent'
import FuncComponent from './FuncComponent'

const StateExample = () => {
  return (
    <div className='text-center '>
        <h1 className='text-2xl bg-red-700'>StateExample</h1>
        <FuncComponent/>
        <ClassComponent></ClassComponent>
    </div>
  )
}

export default StateExample