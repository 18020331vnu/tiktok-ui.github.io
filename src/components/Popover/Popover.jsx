function Popover({ children }) {
   return (
      <div className="overflow-hidden overflow-y-auto rounded-lg bg-white shadow-popoverShadow">
         {children}
      </div>
   )
}

export default Popover
