import React, { Component } from 'react'

export class CycleUpdate extends Component {

    componentDidUpdate(prevProps,prevState){
        console.log("Old Value :",prevProps.number)
        console.log("New value :",this.props.number)
        if(prevProps.number !== this.props.number){
            console.log("Component Updated")
        }
    }
   
  render() {
    return (
      <div className='text-center'>
        <h1 className='bg-green-400 '>ClassComponentCounter</h1>
        <h1 className='text-4xl'>{this.props.number}</h1>
      </div>
    )
  }
}

export default CycleUpdate