import React from 'react'
import { StrictMode } from 'react'

//jsx can be call directly import { jsx as _jsx } from 'react/jsx-runtime' .. runtime.js used by chai


// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {// this function is parsed by bundler and created in a tree like stuvture object similar to reactElement in customreact.js
  return (
    <div>
      <h1> custom App !</h1>
    </div>

  )
}

// const ReactElement = { // trying to directly write a object so that no nee of parsing
//   //but it will not work bcz not in expectd format
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser = 'chai aur react evaluated  expression '// evaluated expression

// React.createElement bhi object hi leta h but specific format of above ReactElement
const reactElement1 = React.createElement( // transpiler bable inject krta is code ko
  "a",
  { href:'https://google.com',target: '_blank'},
  'click me to visit google ! ',
  anotherUser
)

const anotherElement = (<a href="https://google.com" target='_blank' >  visit google </a>)

// createRoot(document.getElementById('root')).render(
  ReactDOM.createRoot(document.getElementById('root')).render(
    // reactElement, // cant be rendered empty page
     reactElement1, // renderd bcz of properreact format
    //  <MyApp />,// yaha pr bhi work nhi karega
    //  <App />
    // anotherElement,
  <StrictMode>
    <App />  {/* can be imported in App.jsx */}
    <MyApp />
    {/* reactElement
    anotherElement strict mode me work nhi krta  */}
  </StrictMode>,
)
