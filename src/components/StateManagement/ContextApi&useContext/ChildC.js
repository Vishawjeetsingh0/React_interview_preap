import React, { useContext } from 'react'
import { nameData } from './ParentA'

const ChildC = () => {
    const name = useContext(nameData)
  return (
    <div>
        <h1>ChildC</h1>
        <h1>hello !! {name}</h1>
        
        {/* using Consumer from CONTEXT API start*/}
        {/* <nameData.Consumer>
            {(name)=>{
                return  <h1>hello !! {name}</h1>
            }}
        </nameData.Consumer> */}
        {/* using Consumer from CONTEXT API end*/}
       
    </div>
  )
}

export default ChildC