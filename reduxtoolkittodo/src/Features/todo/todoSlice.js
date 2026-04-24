import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid is basically works only to generate ids
const initialState = {
    todos: [{ id: 1, text: "hello world" }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // addTodo: (state,action)=> {},//state give access to the values of todos on that particular time 
        //action call krne keliyekuch values to lagegiagr reovetodo call krhe h tovo values isme hoti h
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload//action.payload.text hota but (text: likha he to likhne kineed nhi ) butfor other things action.payload.id
                //payload is an object
                // action.payload is the string "Buy groceries"
                // dispatch(addTodo("Buy groceries")); 
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // No, you do not need .id if you pass the ID directly when calling the action: dispatch(removeTodo(1)) -> action.payload is 1.

        // You only need .id if you pass an object: dispatch(removeTodo({ id: 1 })) -> action.payload.id is 1. maybe bcz it have to return to update
        updateTodo: (state, action) => {
            const update = state.todos.find((todo) => todo.id === action.payload.id);
            if (update) {
                update.text = action.payload.text;
            }
        }
    }
})

export const{addTodo,removeTodo,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;