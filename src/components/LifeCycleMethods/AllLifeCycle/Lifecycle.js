import React, { Component } from 'react'
import CycleUpdate from './CycleUpdate'
import FunctionalCounter from './FunctionalCounter'

export class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    componentDidMount(){
        console.log("ComponentdidMount : When component render first time")
    }

    increment(){
        this.setState({
            count : this.state.count + 1
        })
    }

    componentWillUnmount(){
        console.log("componentWillUnmount : Component Removed....")
    }

  render() {
    return (
      <div className='text-center'>
          <h1 className='mt-10 text-white text-3xl bg-red-900'>All in One - Lifecycle methods</h1>
          <h1 className='flex  justify-center'><p className='text-2xl text-red-600'>Includeing Examples Of - </p>1. Mounting | 2. Updating | 3. UnMounting </h1>
          <CycleUpdate number={this.state.count}></CycleUpdate>
          {/* <FunctionalCounter number={this.state.count}/> */}
          <button className='text-white bg-green-800 m-2 p-2' onClick={()=>{this.increment()}}>Click Me</button>
      </div>
    )
  }
}

export default Lifecycle