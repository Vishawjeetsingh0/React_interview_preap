import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <>
      <input
      className="m-2 p-2 bg-gray-400"
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="m-2 p-2 bg-blue-700" onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </>
  )
}
