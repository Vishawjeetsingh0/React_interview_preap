import React, { useContext } from 'react'
import { GlobalInfo } from './Parent'
import SuperChild from './SuperChild'

const Child = () => {
    const {color} = useContext(GlobalInfo)
  return (
    <>
    <div className={color}>Child component</div>
    <SuperChild />
    </>
  )
}

export default Child