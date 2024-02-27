import React, { useRef } from 'react'

const DomManupulator = () => {
    const inputref = useRef(null);
    const bgref = useRef(null)

    function handleClick(){
        inputref.current.style.color="green"
        bgref.current.style.color="red"
        bgref.current.style.border="2px solid black"
        bgref.current.style.background="yellow"
    }
    function removeClick(){
        inputref.current.style="none"
        bgref.current.style="none"
    }

  return (
    <div className='text-center text-3xl '>
        <h1 ref={inputref}>DomManupulator UseRef </h1>
        <button ref={bgref} onClick={handleClick} >Build Me :| </button>
        <button className='m-2 p-2 bg-red-700' onClick={removeClick} > Remove all styles :| </button>
    </div>
  )
}

export default DomManupulator