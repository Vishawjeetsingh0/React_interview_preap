import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = ({name}) => {
  return (
    <div>
        <h1>ComponentB</h1>
        <p  className='text-2xl text-green-700'>If we don't take prop from componentA in B we can not see results on UI. Because We are trying to use data from component C . So, this is the problem with this named as "PROP DRILLING". 
           <span className='text-2xl text-red-700'>PROPDRILLING PROBLEM - WE HAVE TO PASS PROPS TO WHOLE TREE HIERARCHY </span>
        </p>
        <ComponentC name={name}/>
    </div>
  )
}

export default ComponentB