import React from 'react'

function FuncHeader(props) {
    console.log(props);
  return (
    <div className='text-center text-2xl'>
        <h1>FuncHeader</h1>
        <h1>hello !! {props.name}-{props.last}</h1>
        {/* FOR CALLING CHILD */}
        {props.children}
    </div>
  )
}

export default FuncHeader