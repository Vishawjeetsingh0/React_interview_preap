import React, { createContext } from 'react'
import ChildB from './ChildB'

export const nameData = createContext();
const ParentA = () => {
  return (
    <div className='text-center'>
        <h1 className='text-3xl bg-purple-600 text-white'>CONTEXT API - SOLUTION TO PROP-DRILLING PROBLEM</h1>
        <nameData.Provider value={"Vishu"}> 
            <ChildB/>
        </nameData.Provider>
       
    </div>
  )
}

export default ParentA
