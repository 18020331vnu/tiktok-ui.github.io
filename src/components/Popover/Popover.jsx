function Popover({ children }) {
   return (
      <div className="bg-white shadow-popoverShadow rounded-lg overflow-hidden overflow-y-auto">
         {children}
      </div>
   )
}

export default Popover
