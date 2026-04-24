import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/todo/todoSlice'; //todoReducer apne aap likhdiya

export const store = configureStore({
    reducer: todoReducer
})