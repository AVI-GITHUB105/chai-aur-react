import React,{createContext,useContext} from "react";

export const TodoContext = createContext({
    todos: [{
        id:1,
        todo: 'todo mdg',
        completed:false,
    }],
    //function define kiye h inki definiation like kya hrna hpga function ko vo appjsx me pata chalega
    addTodo: (todo) => {},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id) => {},
    toggleCompleted:(id)=>{}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

