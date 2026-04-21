import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     // / top level element iske andar nesting ho rhi h
//     path:"/",// kya render karega batana prta h niche h
//     element:<Layout/>,
//     children: [
//       {path:'',// /then kuch ni se home 
//       element:<Home/>},
//       {path:'about',// /then About se about page 
//       element:<About/>},
//       {path:'contact',
//       element:<Contact/>},

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      {/* // dynamicvalue from url */}
      <Route path='User/:userid' element={<User/>}/>
      <Route
      // loader={()=>{ //yaha pr direct fetch call krke data dot kr sakte h
      //   //method call krme ke liye bhi krl skte h githubfile me method create kr rkha h async await but same file me nhi krna cahiye 
      // }}
      loader={githubInfoLoader}
      path='github' element={<Github/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* roter provider ko props chahiye hota h */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
