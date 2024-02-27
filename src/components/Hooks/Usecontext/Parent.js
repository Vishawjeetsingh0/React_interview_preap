import React, { createContext, useState } from 'react'
import Child from './Child'
import OtherChild from './OtherChild';


export const GlobalInfo = createContext();

const Parent = () => {
    const [color, setColor] = useState('text-green-600');
    const [day, setDay] = useState("'Monday'");
    const [bgcolor, setBgcolor] = useState("");

    const getDay = (data) =>{
        setDay(data)
    }

    const getColor = (data) => {
        setBgcolor(data)
    }

    const removebg = (data) => {
        setBgcolor(data)
    }

  return (
    <GlobalInfo.Provider value={{color, getDay, getColor, removebg}}>
    <div className={bgcolor}>
    <div className='text-center text-4xl m-2 border-4 border-black'>
        <h1>Parent Component {day} </h1>
        <Child/>
        <OtherChild/>
    </div>
    </div>
    </GlobalInfo.Provider>
  )
}

export default Parent