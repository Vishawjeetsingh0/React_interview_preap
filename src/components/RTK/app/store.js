import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import todoReducer from "../ToDo/features/todoSlice"


export const store = configureStore({
    reducer : {
        counter : counterReducer,
        todoReduce : todoReducer,
    }
});