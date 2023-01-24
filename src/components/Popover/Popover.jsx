import PropTypes from 'prop-types'
function Popover({ children }) {
   return (
      <div className="overflow-hidden overflow-y-auto rounded-lg bg-white shadow-popoverShadow">
         {children}
      </div>
   )
}

Popover.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Popover
