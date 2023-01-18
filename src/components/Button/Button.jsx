import React from 'react'
import { Link } from 'react-router-dom'

function Button({ to, href, onClick, className = '', children }) {
   const Type = to ? Link : href ? 'a' : 'button'
   return (
      <Type
         href={href}
         to={to}
         onClick={onClick}
         className={`flex items-center ${className}`}
      >
         {children}
      </Type>
   )
}

export default Button
