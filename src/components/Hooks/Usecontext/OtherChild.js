import React, { useContext } from 'react'
import { GlobalInfo } from './Parent'

const OtherChild = () => {
    const {color, getColor} = useContext(GlobalInfo)
    const bgcolor = "bg-blue-400";
  return (
    <div>
        <h1 className={color}>OtherChild Component</h1>
        <button className="m-2 p-2 bg-yellow-700" onClick={()=>getColor(bgcolor)}>Bg-Color</button>
    </div>
  )
}

export default OtherChild