import { useState, useCallback , useEffect, useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numallow, setnumallow] = useState(false)
  const [charallow, setcharallow] = useState(false)
  // const [randompass,setrandompass] = useState('INWANO!')//default kr sakte h but isme bhi randompass generate krna h paelode hote hi 
  const [randompass, setrandompass] = useState('')

//useref hook
const passref = useRef(null);

const copyPasswordToClipboard = useCallback(() => {
  passref.current?.select();
  passref.current?.setSelectionRange(0,101);
  window.navigator.clipboard.writeText(randompass)//window use kr pa rhe hai kyuki react h next me server side render hota h
},[randompass])

  const passgenerator = useCallback(() => {//memoize cache me rakhta h dependencies ki values ko
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst'
    if (numallow) str += "0123456789"
    if (charallow) str += "`!@#$^&*(){}[]"

    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass+= str.charAt(char);
    }
    setrandompass(pass);
  }, [length, numallow, charallow, setrandompass])// usecallback dependencies ko optimize kta h

// passgenerator();//cant call directly 
  useEffect(() => {//kuch bhi cher char ho to dubara se run kro
    passgenerator()
  }, [length, numallow, charallow, passgenerator])

  return (
    <div className='w-full h-svh bg-gray-800 flex flex-wrap items-center  justify-center text-amber-500' >
      <div className='flex flex-wrap flex-col items-center bg-black py-3 gap-3' >
        <h1 className=' text-4xl text-center text-amber-500 mx-3 ' > Password Generator</h1>
        <div id='passin' className=' flex gap-2'>
          <input type="text"
            value={randompass}
            className=" bg-amber-50 w-full py-1 px-3 rounded-4xl "
            placeholder='Password'
            readOnly
            ref={passref}//useref reference
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-4xl '
          >copy</button>
        </div>
        <div id='dependencies' className='flex flex-wrap items-center justify-center mx-3 gap-x-1 ' >
          <div className='flex '>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setlength(e.target.value)}}
            />
            <label> &nbsp;length:{length} &nbsp;</label>
            {/* &nbsp;&nbsp; */}
          </div>
          <div className="flex ">
            <input
              type="checkbox"
              defaultChecked={numallow}
              id="numberInput"
              onChange={() => {
                setnumallow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">&nbsp;Numbers</label>
          </div>
          <div className="flex ">
            <input
              type="checkbox"
              defaultChecked={charallow}
              id="characterInput"
              onChange={() => {
                  setcharallow((prev) => !prev )//we didnt simply put true bczit will make it trueforever afterone click
                  //(prev) => !prev using this it record previous val change on each click
              }}
            />
            <label htmlFor="characterInput"> &nbsp;Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
