import React, { useEffect } from 'react'

const FunctionalCounter = ({number}) => {

    //Mounting Phase
    // useEffect(()=>{
    //     console.log("Functional component : Mounting")
    // })

    //Updating Phase
    // useEffect(()=>{
    //     console.log("Functional component : Updating...")
    // },[number])

    //UnMounting Phase
    useEffect(()=>{
        console.log("Functional component : Updating...")
    
        return ()=>{
            console.log("Functional Component : Removed ")
        }
    },[number])

  return (
    <div className='text-center'>
        <h1 className='bg-red-400 '>FunctionalComponentCounter</h1>
        <h1 className='text-3xl'>{number}</h1>
    </div>
  )
}

export default FunctionalCounter