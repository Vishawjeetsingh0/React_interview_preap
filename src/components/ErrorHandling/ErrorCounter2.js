import React, { Component } from 'react'

export class ErrorCounter2 extends Component {
  render() {
    if(this.props.value > 5){
        throw new Error("Error Occored in counter 2")
    }
    console.log('Calling Counter 2...')
    return (
      <div className='text-center text-3xl'>
        <h1  className='mt-5'>Counter 2 is : </h1>
        <h1 className='mb-5' >{this.props.value} </h1>
        <buttton className="bg-green-400 m-2 p-2 mt-10 mb-5 " onClick={this.props.onClick}>Add</buttton>
      </div>
    )
  }
}

export default ErrorCounter2