import React, { Component } from 'react'
import FuncHeader from './FuncHeader'
import ClassHeader from './ClassHeader'

export class PropsExample extends Component {
  render() {
    return (
      <div className='text-center text-2xl'>
        <h1>PropsExample</h1>
        <FuncHeader name='Vishu' last='Singh'>
            <p className='text-xl'>Vishu is a developer</p>
        </FuncHeader>
        <FuncHeader name='Abhi' last='Singh'/>
        <ClassHeader name="Class Ajay" last='class Suneja' ></ClassHeader>
      </div>
    )
  }
}

export default PropsExample