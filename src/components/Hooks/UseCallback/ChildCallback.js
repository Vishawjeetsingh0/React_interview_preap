import React, { memo } from 'react'

const ChildCallback = ({counterTwo, setCountertwo}) => {
    console.warn("child component is called")
  return (
    <>
    <div>Child Component</div>
    </>
  )
}

export default memo(ChildCallback)
