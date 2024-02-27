import React, { useEffect, useState } from 'react'

const Counteffect = () => {
    const [count, setCount] = useState(0);
    const [secondcount, setSecondCount] = useState(0);

    useEffect(()=>{
        console.log("count is" + count);
    }, [count ])

    useEffect(()=>{
        console.log("seond-count is" + secondcount);
    })

  return (
    <div className='text-center'>
        <h1>count is {count}</h1>
        <h1>second count is {secondcount}</h1>
        <button className="m-2 p-2 bg-blue-400" onClick={()=>setCount(count+1)} >Update Count</button>
        <button className="m-2 p-2 bg-yellow-400" onClick={()=>setSecondCount(secondcount+1)} >Update second-ount</button>
    </div>
  )
}

export default Counteffect