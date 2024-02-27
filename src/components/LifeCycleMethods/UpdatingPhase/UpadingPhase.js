import React, { Component } from 'react'

export class UpadingPhase extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'vishu'
      }
    }

    static getDerivedStateFromProps(props,state){
        console.log("inside getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("inside componentDidMount");
        //for updating
        this.setState({
            name:'Abhi'
        })
    }
    
    shouldComponentUpdate(){
        console.log("inside shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("inside getSnapshotBeforeUpdate");
        console.log('PrevState: ',prevState)
        return prevState;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('inside componentDidUpdate')
        console.log('Snapsot : ', snapshot)
    }



  render() {
    console.log("inside render");

    return (
      <div className='text-center text-4xl'>
      <h1 className='text-center text-6xl'>2. Updating Phase</h1>
      <h1 className='text-center text-yellow-700 text-3xl' >Example 1</h1>
        <p>My name is {this.state.name}</p>
      </div>
    )
  }
}

export default UpadingPhase