// loin dat send krna h
import React, { useState,useContext } from 'react'
// usercontext ke andar jo value hai usko kese fetch karunga uske liye usecontext usekarunga
import UserContext from '../Context/UseContext'


function Login() {
const [username,setusername] = useState('')
const [password,setpassword] = useState('')

//data bhejne agaya
const {setuser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()// use krtr h taki values url ke through kahi chalena jaye post se
        setuser({username,password})

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => {setusername(e.target.value)}}
        placeholder='username' />  
        {/* place holer ke andarkuch bhi likha hvo use karenge dat fetch krne ke liye */}
        {/* for space {"    "} not working */}
        {"       "} 
        <input type="text" 
        value={password}
        onChange={(e) => {setpassword(e.target.value)}}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  ) 
}

export default Login