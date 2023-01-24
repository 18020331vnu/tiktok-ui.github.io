function Popover({ children, className = '' }) {
   return (
      <div className={`bg-white shadow-popoverShadow rounded-lg ${className}`}>
         {children}
      </div>
   )
}

export default Popover
