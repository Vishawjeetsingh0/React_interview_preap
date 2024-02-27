import React from 'react'
import { Link } from 'react-router-dom'


const HowLazyLoad = () => {
  return (
    <div className='text-center'>
        <h1 className='text-4xl'>Also Known As : </h1>
        <li> 1.Lazy Loading, 2.Chunking, 3.Dynamic Bundling, 4.On Demand loading</li>
        <Link to="/lazy">
            <button className='m-2 p-2 bg-green-400 rounded-lg'>Show-Lazy..😉 </button>
        </Link>
    </div>
  )
}

export default HowLazyLoad