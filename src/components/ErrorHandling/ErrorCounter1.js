import React, { Component } from 'react'

export class ErrorCounter1 extends Component {
   
  render() {
    if(this.props.value > 3){
        throw new Error("too many counts....")
    }
    console.log('Calling Counter 1...')
    return (
      <div className='text-center text-3xl'>
        <h1  className='mt-5'>Counter 1 is : </h1>
        <h1 className='mb-5' >{this.props.value} </h1>
        <buttton className="bg-blue-400 m-2 p-2 mt-10 mb-5 " onClick={this.props.onClick}>Add</buttton>
      </div>
    )
  }
}

export default ErrorCounter1