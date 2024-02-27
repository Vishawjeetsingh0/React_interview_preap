import React, { useContext } from 'react'
import { GlobalInfo } from './Parent'

const SuperChild = () => {
    const {color, getDay, removebg} = useContext(GlobalInfo);
    const day = "Sunday";
    const bg = " ";
  return (
    <div>
        <h1 className={color}>SuperChild Component</h1>
        <button  className="m-2 p-2 bg-yellow-700" onClick={()=>getDay(day)}>Click Me</button>
        <button  className="m-2 p-2 bg-yellow-700" onClick={()=>removebg(bg)}>remove bg</button>
    </div>
  )
}

export default SuperChild