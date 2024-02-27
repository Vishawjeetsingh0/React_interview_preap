import React, { useState } from 'react'

const TextUpdate = () => {

    const [text, setText] = useState('Its Vishu');
    const [textcolor, setTextColor] = useState('text-black-600')

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleChangeColor = () =>{
      setTextColor('text-pink-600');
    }

  return (
    <div className='border-4 border-blue-600 mt-10'>
      <h1 className='text-5xl text-blue-600 ' >Example 2.TextUpdater </h1>
        <input className='border border-blue-950' value={text} onChange={handleChange}/>
        <h1 className={textcolor}>You Typed : {text}</h1>
        <button className="bg-red-600 p-2" onClick={() => setText('Its Vishu')}>Reset</button>
        <button  className="bg-pink-600 p-2 m-2" onClick={handleChangeColor}>Pink</button>
        <button className="bg-yellow-600 p-2" onClick={() => setTextColor('text-black-600')}>Reset Color</button>
    </div>
  )
}

export default TextUpdate