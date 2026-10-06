import React from 'react'

function Button({
    children,
    type = 'text',
    textColor= 'white',
    className = '',
    bgColor = 'red-500',
    ...props

}) {
  return (
    <button className = {`px-4 py-2 rounded-2xl ${className} bg-${bgColor} text-${textColor}`} {...props}>
      {children}
    </button>
  )
}

export default Button
