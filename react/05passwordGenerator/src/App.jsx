import { useState, useCallback , useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [Password, setPassword] = useState("");
  // useReff
  const passwordRef = useRef(null) ; 

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

const copyPasswordToClipboard = 
useCallback(()=>{
  passwordRef.current?.select() ; 
  passwordRef.current?.setSelectionRange(0 , 100)
  window.navigator.clipboard.writeText(Password) ; 
} , [Password])


  useEffect(() => {
    passwordGenerator() ; 
  } , [length , numberAllowed , charAllowed , passwordGenerator]) ; 

  return (
    <>
      <div className='w-full max-w-md mx-auto px-4 py-3 my-8 shadow-md rounded-lg text-orange-500 bg-gray-700'  >
        <h1 className='text-white text-center my-3 '>Password Generator</h1>
        <div className='flex shadow bg-white rounded-lg overflow-hidden mb-4 '>
          <input type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 text-gray-800'
            placeholder='Password'
            readOnly
            ref = {passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value) ; 
              }}
            />
            <label className='w-20'>Length: {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
