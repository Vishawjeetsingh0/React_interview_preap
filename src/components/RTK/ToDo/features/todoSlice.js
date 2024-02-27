import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
   todoList : [{id:0,text:"Initial Todo"}]
}
export const todoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const nextTodo = {
                id:nanoid(),
                text:action.payload
            }
            state.push?.todoList(nextTodo)
        },
        deleteTodo:(state,action)=>{
            state.todoList = state.todoList?.filter((removeTodo)=>
            removeTodo.id !== action.payload)
        },
        editTodo:(state,action)=>{

        }

    }
})

export const {addTodo,deleteTodo,editTodo} = todoSlice.actions

export default todoSlice.reducer