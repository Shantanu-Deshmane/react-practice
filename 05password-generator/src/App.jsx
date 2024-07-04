import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const[character, setCharacter] = useState(false);
  const[password, setpassword] = useState("");
   
  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str+="1234567890"
    if(character) str+="!@#$%^&*()~==_-{}[]<>,.?/:"

    for (let i = 1; i <length; i++) {
      let char= Math.floor(Math.random()* str.length + 1) 
      pass += str.charAt(char)

    }

    setpassword(pass)

  }, [length,number,character,setpassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  })
  
const passwordRef =useRef(null)

  useEffect(()=>{
    generatePassword()
  },[number, character, length, generatePassword])



  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-pink-500 bg-gray-700'>
    <h1 className=' text-2xl mb-4 my-3 text-center text-white'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>

      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />

      <button  
      className='outline-none bg-blue-700 text-white px-3 py-0.5 '
      onClick={copyPassword}>Copy</button>
      
    </div>

    <div className='flex text-sm gap-x-2'>

      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label htmlFor="">Length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={number}
        id='numberInput'
        onChange={(prev)=>{
          setNumber((prev) => !prev)
        }}
        />
        <label>Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={number}
        id='charInput'
        onChange={(prev)=>{
          setCharacter((prev) => !prev)
        }}
        />
        <label>Character</label>
      </div>
    </div>
    </div>

    </>

  )
}

export default App
