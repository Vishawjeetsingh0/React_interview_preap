import React, { Component } from 'react'

export class ClassComponent extends Component {

    constructor(){
        super();
        this.state={
            CarName : "'G-Wagon'"
        }
    }

    
  render() {

    // const handleChange = (e)=>this.setState(
    //         {CarName:e.target.value}
    //         )

    return (
      <div className='text-center'>
        <h1 className='text-3xl'>This is ClassComponent</h1>
        {/* <input className='bg-red-400' type='text' onChange={handleChange}/> */}
        <input className='bg-red-400' type='text' onChange={(e)=>this.setState({CarName:e.target.value})}/>
        <h1>My car's Name is {this.state.CarName}</h1>
      </div>
    )
  }
}

export default ClassComponent