import React, { useState } from 'react'

 const Hoc = () => {
  return (
    <>
        <h1 className='text-5xl font-bold text-center'>Hoc</h1>
    <div className='flex justify-evenly'>
       <HOCRed cmp={Counter}/>
       <HOCGreen cmp={Counter}/>
       <HOCBlue cmp={Counter}/>
    </div>
    </>
  )
}

function HOCRed(props){
    return <h1 className='bg-red-600 w-[100px]'>Red<props.cmp/></h1>
}
function HOCGreen(props){
    return (
        <div className='bg-pink-200'>
    <h1 className='bg-green-600 w-[100px]'>Green<props.cmp/></h1>
    <p>Made by Vishu with ❤️🙂👍</p>
    </div>
    )
}
function HOCBlue(props){
    return <h1 className='bg-blue-600 w-[100px]'>Blue<props.cmp/></h1>
}



const Counter = () =>{
    const [count, setCount] = useState(0);
    return(
        <div>
        <h1>count : {count}</h1>
        <button onClick={()=>setCount(count +1)}>Update</button>
        </div>
    )
}

export default Hoc

