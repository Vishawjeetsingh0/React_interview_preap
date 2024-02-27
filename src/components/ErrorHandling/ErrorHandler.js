import React, { Component } from 'react'

export class ErrorHandler extends Component {
    state = {
        error : ''
    }

    static getDerivedStateFromError(error){
        return{
            error:error
        }
    }

    componentDidCatch(error,info){
        console.log('error is : ',error)
        console.log('info is : ',info)
    }
  render() {
    if(this.state.error){
        return (
      <div className='text-center text-3xl'>
        <h2>Some Error Occured....</h2>
      </div>
    ) 
    }
    return this.props.children
   
  }
}

export default ErrorHandler