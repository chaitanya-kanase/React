
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className='w-full h-screen ' style={{backgroundColor : color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3  rounded-3xl bg-white px-4 py-4'>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor : "red"}} onClick={() => setColor('red')}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor : "blue"}} onClick={() => setColor('blue')}>blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor : "green"}} onClick={() => setColor('green')}>green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor : "olive"}} onClick={() => setColor('olive')}>olive</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor : "grey"}} onClick={() => setColor('grey')}>grey</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor : "yellow"}} onClick={() => setColor('yellow')}>yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor : "pink"}} onClick={() => setColor('pink')}>pink</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor : "purple"}} onClick={() => setColor('purple')}>purple</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor : "lavender"}} onClick={() => setColor('lavender')}>lavender</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-3xl' style={{backgroundColor : "white"}}onClick={() => setColor('white')}>white</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor : "black"}} onClick={() => setColor('black')}>black</button>
            
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
