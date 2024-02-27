import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from './todoSlice';

const TodoShow = () => {
    const tododata = useSelector(state=>state.todoReducer?.todoList)
    const dispatch = useDispatch();
  return (
    <div>
        <div>
            <p>{tododata?.map((todoprint)=>(
              <li key={todoprint.id}>
                {todoprint.text}
                <button onClick={()=>dispatch(deleteTodo(todoprint.id))}>Delete</button>
              </li>
            ))}</p>
        </div>
    </div>
  )
}

export default TodoShow