import React, { memo } from 'react'

const Childfor = ({Learning, count}) => {
    console.log("child component")
  return (
    <div>Childfor</div>
  )
}

export default memo(Childfor)