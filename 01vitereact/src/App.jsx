import Chai from "./Chai"
function App() {
  const username = "User"; // Define the username variable

  return (
    // <h1>chai aur vite</h1> 
    // hum ek hi elemnt export kr sakte h h1 wala bhi likhenge to error ayega so uske liye div ya fragment(<> </>) use krlo 
    // <Chai/>
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
   </>
  )
}

export default App
