import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
const data = useLoaderData()

//     const [data,setdata]= useState([])
// useEffect(() => {
//     fetch('https:/api.github.com/users/AVI-GITHUB105')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         setdata(data)
//     })
// },[])

  return (
    <div className='text-center m-4 p-4 bg-amber-500 text-3xl text-white '>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="git picture" width={300} />
        </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https:/api.github.com/users/AVI-GITHUB105')
    return response.json()
}

// sath meimport ho jaye isliye ek hi file me likhte h import Github, {githubInfoLoader} from './components/Github/Github.jsx'
