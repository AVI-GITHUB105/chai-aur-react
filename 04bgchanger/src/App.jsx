import { useState } from "react"


function App() {
  const [color, setcolor] = useState('black')//The background color resets to black on page reload because React state 
  // (managed by useState) is stored in memory and doesn't persist across page refreshes. When the page reloads,
  //  the component re-mounts with the initial state value of 'black'.

  return (
    <div className="w-full h-screen duration-200 "
      style={{ backgroundColor: color, }}>
      <div className="text-white fixed flex flex-wrap align-bottom bottom-12 justify-center inset-x-0 px-2  ">
        <div className="flex flex-wrap align-middle justify-center shadow-lg bg-amber-500 gap-3 px-3 py-3 rounded-2xl ">
          <button onClick={() => setcolor("red")} className=" px-3 py-2 rounded-full text-white shadow-lg " style={{ backgroundColor: "red" }} >Red</button>
          <button onClick={() => setcolor("blue")} className=" px-3 py-2 rounded-full text-white shadow-lg " style={{ backgroundColor: "blue" }} >blue</button>
          <button onClick={() => setcolor("black")} className=" px-3 py-2 rounded-full text-white shadow-lg " style={{ backgroundColor: "black" }} >black</button>
          <button onClick={() => setcolor("green")} className=" px-3 py-2 rounded-full text-white shadow-lg " style={{ backgroundColor: "green" }} >green</button>
          <button onClick={() => setcolor("white")} className=" px-3 py-2 rounded-full text-black shadow-lg " style={{ backgroundColor: "white" }} >white</button>
          <button onClick={() => setcolor("grey")} className=" px-3 py-2 rounded-full text-white shadow-lg " style={{ backgroundColor: "grey" }} >grey</button>
          <button onClick={() => setcolor("brown")} className=" px-3 py-2 rounded-full text-white shadow-lg " style={{ backgroundColor: "brown" }} >brown</button>
        </div>
      </div>
    </div>

  )
}

export default App
//  to persist the background color across page reloads.

// Added useEffect import and hook to save the current color to localStorage whenever it changes
// Modified useState to initialize from localStorage.getItem('bgColor') or default to 'black'

//   const [color, setcolor] = useState(localStorage.getItem('bgColor') || 'black')

//   useEffect(() => {
//     localStorage.setItem('bgColor', color)
//   }, [color])