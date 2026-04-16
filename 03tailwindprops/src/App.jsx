import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Card from './components/Card'

function App() { 
  const [count, setCount] = useState(0)

  let myobj = {
    username: 'avi',
    age: 22
  }
    let newArr = [1, 2, 3]

  return (
    <>
      <h1 className=' bg-green-500 text-black p-4 rounded-2xl' > tailwid test</h1>
      <Card channel="Features" btnText='click007'/>// hum kitne bhi card le sakte h , but different dat ke liye hum datbase me looplaga denge 
      // so hr card alg info lega uska intazam props se hota h
      {/* <Card channel='cahi' someobj={myobj} array={newArr} /> */}
      <Card channel='cahi' btnText='click me' /> // yaha simply btnText='click me' likhne se change nhi hoga pass bhi krna hoga card me channel,btnText 
<Card channel='default handel'  />
    </>
  )
}

export default App
