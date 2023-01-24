import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function useDebounce(value, delay) {
   const [debouncedValue, setDebouncedValue] = useState(value)
   useEffect(() => {
      const handler = setTimeout(() => {
         setDebouncedValue(value)
      }, delay)

      return () => {
         clearTimeout(handler)
      }
   }, [value, delay])
   return debouncedValue
}

useDebounce.propTypes = {
   value: PropTypes.any.isRequired,
   delay: PropTypes.number.isRequired,
}

export default useDebounce
