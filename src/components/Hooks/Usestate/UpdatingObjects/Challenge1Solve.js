import React, { useState } from 'react'

const Challenge1Solve = () => {
    
    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
      });
    
      function handlePlusClick() {
        // player.score++;
        setPlayer({
          ...player,
          score: player.score +1
        })
      }
    
      function handleFirstNameChange(e) {
        setPlayer({
          ...player,
          firstName: e.target.value,
        });
      }
    
      function handleLastNameChange(e) {
        setPlayer({
          ...player,
          lastName: e.target.value
        });
      }
    
  return (
    <>
    <h1 className='mt-20'>Challenge 1. Solotion</h1>     
    
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
        <input  className='bg-pink-400'
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input  className='bg-yellow-400'
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label></div>
    </>
  );
}


export default Challenge1Solve