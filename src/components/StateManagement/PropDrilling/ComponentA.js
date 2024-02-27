import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  return (
    <div className='text-center'>
        <h1 className='text-3xl'>Prop Drilling Problem</h1>
        <ComponentB name={"Vishu"}/>
    </div>
  )
}

export default ComponentA