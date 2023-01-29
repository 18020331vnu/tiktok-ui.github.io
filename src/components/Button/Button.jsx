import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Button({ to, href, onClick, className, children }) {
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

Button.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,
   onClick: PropTypes.func,
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
}

export default Button
