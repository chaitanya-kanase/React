import React from 'react'
import blog from '../public/pngegg.png'

function Logo({width='80px'}) {
  return (
    <div className='w-24 h-auto object-contain p-4' >
      <img src={blog}/>
    </div>
  )
}

export default Logo
