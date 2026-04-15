import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
let [counter,setcounter] = useState(15)// can write anything 0 ... instead of 15

//  let counter = 15 just variable change hoga ui nhi
const incvalue = function (){
  if (counter == 20){
    alert('counter cant be greater then 20')
  }
  else{counter = counter + 1; //isse value inc to ho rhi h inconsole but
//  page pr changes nhi a rhe ui updation
setcounter(counter);
  console.log("value inc", counter )}
  
}
const decvalue = function (){
  if (counter == 0){
    alert('counter cant be lesss then zero')
  }
  else{setcounter(counter - 1);
  console.log("value dec", counter )}

}
  return (
    <>
    <h1> Chai counter Project</h1>
    <h2>counter value: {counter}</h2> 

    <button onClick={incvalue} >inc value {counter}</button>
    <button onClick={decvalue}>dec value {counter} </button>
    </>
  )
}

export default App
