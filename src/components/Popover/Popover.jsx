import PropTypes from 'prop-types'
function Popover({ children, className }) {
   return (
      <div
         className={`overflow-hidden overflow-y-auto rounded-lg bg-white shadow-popoverShadow ${className}`}
      >
         {children}
      </div>
   )
}

Popover.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
}

export default Popover
