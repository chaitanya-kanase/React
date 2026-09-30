import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id: 1,
        todo: "my first todo",
        isCompleted: false,
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{},

})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}