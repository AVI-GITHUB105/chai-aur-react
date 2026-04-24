
import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
  const [editTodo, setEditTodo] = useState(null)
  
  return (
    <>
      <h1 className='text-3xl flex justify-center '>Learning Redux-ToolKit</h1>
      <AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
      <Todo setEditTodo={setEditTodo} />
    </>
  )
}

export default App
