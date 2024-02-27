import React, { Component } from 'react'

export class ClassHeader extends Component {
  render() {
    return (
      <div className='text-center'>
        <h1 className='text-6xl'>ClassHeader</h1>
        <h1>Hello !! this is {this.props.name}- {this.props.last}</h1>
      </div>
    )
  }
}

export default ClassHeader