import React, { useState } from 'react'
import { addTodo, deleteTodo } from './todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
    const dispatch = useDispatch()
    // const tododata = useSelector((store)=>store.todoList)
    const [input,setInput] = useState();

    const AddtodoHandler = (e) =>{
      e.preventDefault()
      dispatch(addTodo(input))
      setInput(' ')
    }
  return (
    <div>
        <h1>Todo</h1>
        <form onSubmit={AddtodoHandler}>
            <input type="text" placeholder='Commit What you Link..' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button type='submit' >Add</button>
        </form>
    </div>
  )
}

export default Todo