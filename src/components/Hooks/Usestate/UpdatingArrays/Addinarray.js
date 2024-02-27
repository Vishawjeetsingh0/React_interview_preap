import React, { useState } from 'react'


let nextId = 0;

const Addinarray = () => {
    const [name, setName] = useState('');
    const [next, setNext] = useState([]);

    const handleClick = () =>{
        setNext([
            
            ...next,
            {
                id: nextId++,
                name: name
            }
        ])
    }
 
  return (
    <div className='border-8 border-purple-600 text-center mt-5 '>
        <h1 className='text-4xl text-purple-600 mt-5'>Array Methods </h1>
        <input className='bg-blue-400' value={name} onChange={e => setName( e.target.value)}/>
        <button className='p-2 m-2 bg-green-400' onClick={handleClick}>Add</button>
        <button className='p-2 m-2 bg-red-400' onClick={() => setNext([])}>Reset</button>
        <ul> {next.map(n=>(<li key={n.id}>{n.id}. {n.name}{' '}
        {/* removing items form an array using filter */}
        <button className="p-2 m-2 bg-red-900" onClick={() => setNext(n.filter(a => a.id !== n.id)) }>Delete</button>
           
            
        </li>))} </ul>
    </div>
  )
}

export default Addinarray