import React, { useState } from 'react'

const Challenge1 = () => {
    
    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
      });
    
      function handlePlusClick() {
        player.score++;
      }
    
      function handleFirstNameChange(e) {
        setPlayer({
          ...player,
          firstName: e.target.value,
        });
      }
    
      function handleLastNameChange(e) {
        setPlayer({
          lastName: e.target.value
        });
      }
    
  return (
    <>
    <h1 className='mt-20 mb-5 text-center'>Challenge 1.Fix incorrect state updates</h1>     
    <p className='mb-10'>This form has a few bugs. Click the button that increases the score a few times. Notice that it does not increase. Then edit the first name, and notice that the score has suddenly “caught up” with your changes. Finally, edit the last name, and notice that the score has disappeared completely.
        Your task is to fix all of these bugs. As you fix them, explain why each of them happens.</p> 

       <div className='flex flex-col'>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button className='m-2 p-2 bg-green-400' onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input className='bg-pink-400'
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input className='bg-yellow-400'
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label></div> 
    </>
  );
}


export default Challenge1