
import React, { Component } from 'react'

export class MountingChild extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'vishu'
        }
        console.log("lifeCycleChild: Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifeCycleChild: getDerivedStateFromProps");
        return null;
    }
    
     componentDidMount(){
        console.log("lifeCycleChild: componentDidMount");
     }

  render() {
    console.log("lifeCycleChild: render");
    return (
      <div>
        <h1 className='text-center text-yellow-700 text-3xl' >MountingChild</h1>
      </div>
    )
  }
}

export default MountingChild