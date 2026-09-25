import { useCallback, useState, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')


  const passwordGenerator = useCallback(() => {
      let pass = ''
      let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      if(numberAllowed) characters+='0123456789'
      if(characterAllowed) characters+='!@#$%^&*()_+~`|}{[]:;?><,./-='

      for(let i =1;i<=length;i++){
        const random = Math.floor(Math.random()*characters.length+1)
        pass+= characters.charAt(random)
      }

      setPassword(pass)

  },[length, numberAllowed, characterAllowed,setPassword])


   const passwordRef = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, characterAllowed])

  return (
    <div className='bg-[#F8F8F2] w-screen min-h-screen'>
      <div className='bg-grey-900 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500' >
        <h2 className='text-center font-bold text-2xl text-white pt-10'>Password Generator</h2>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password}className="outline-none w-full py-1 px-3 bg-white" placeholder="Password" readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'onClick={copyToClipboard}>copy</button>
        </div>
        <div className='flex gap-x-2 text-small'>
          <input type='range' className='w-1/2' min="8" max="30" onChange={(event)=>setLength(event.target.value)} defaultValue={length}/>
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onClick={()=> setNumberAllowed(prev => !prev)}
            id="numberInput"
           
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked = {characterAllowed}
            onClick = {()=> setCharacterAllowed((prev)=> !prev)}
            id="characterInput"
            
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>

    </div>
  )
}

export default App
