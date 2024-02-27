import React, { Component } from 'react'

export class Counter2 extends Component {
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.value !== nextProps.value){
            return true;
        }
        return false;
    }
  render() {
    console.log('Calling Counter 2...')
    return (
      <div className='text-center text-3xl'>
        <h1>Counter 2 is : </h1>
        <h1 className='mb-5'>{this.props.value} </h1>
        <buttton className="bg-green-400 m-2 p-2 mt-5" onClick={this.props.onClick}>Add</buttton>
      </div>
    )
  }
}

export default Counter2