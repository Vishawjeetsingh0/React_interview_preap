
import React, { Component } from 'react'
import MountingChild from './MountingChild';

export class MountingParent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'vishu'
        }
        console.log("lifeCycleParent: Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifeCycleParent: getDerivedStateFromProps");
        return null;
    }
    
     componentDidMount(){
        console.log("lifeCycleParent: componentDidMount");
     }

  render() {
    console.log("lifeCycleParent: render");
    return (
      <div>
        <h1 className='text-center text-6xl'>1. Mounting Phase</h1>
        <h1 className='text-center text-yellow-700 text-3xl' >MountingParent</h1>
        <MountingChild></MountingChild>
      </div>
    )
  }
}

export default MountingParent