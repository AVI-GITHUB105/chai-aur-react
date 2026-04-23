import { useState,useEffect } from 'react'

import './App.css'
import { TodoProvider } from './Context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
const [todos,setTodos] = useState([])
const addTodo = (todo) => {
  //setTodos(todo)// isse todo to a jayega todos mai but pehleke sare delete ho jayenge 
  setTodos((prev) => [...prev,{id: Date.now(), ...todo }])// todo ki jagah {id,tod,completed}
}

const updateTodo = (id,todo) => {
  setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo: prevTodo)) )
}

const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}

const toggleCompleted = (id) => {
  setTodos((prev) => prev.map((toggle) => toggle.id === id? {...toggle, completed: !toggle.completed} : toggle))
}

useEffect(() => {
  // for render the data fom local storae if any item in the local storage 
const todos = JSON.parse(localStorage.getItem("todos"))
if (todos &&todos.length > 0){
  setTodos(todos)
}
}, [])

useEffect(()=> {
  localStorage.setItem("todos", JSON.stringify(todos))
} , [todos])

  return (
    <TodoProvider value={{ todos,addTodo,deleteTodo,updateTodo,toggleCompleted }}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'> 
                          <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div><h1 className='flex justify-center font-bold text-3xl text-amber-500'> React part 2 context Api Localstorage</h1>
    </TodoProvider>
  )
}

export default App
