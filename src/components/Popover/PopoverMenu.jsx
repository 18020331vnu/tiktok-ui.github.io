import Tippy from '@tippyjs/react/headless'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from '../Button/Button'
import Popover from './Popover'
import PopoverHeader from './PopoverHeader'

function PopoverMenu({ children, data, delay, placement }) {
   const [history, setHistory] = useState([{ data }])
   const currentMenu = history[history.length - 1]

   return (
      <Tippy
         offset={[12, 8]}
         hideOnClick={false}
         onHidden={() => {
            setHistory([{ data }])
         }}
         interactive
         delay={delay}
         placement={placement}
         render={(attr) => (
            <Popover>
               {history.length > 1 && (
                  <PopoverHeader
                     header={currentMenu.header}
                     onClick={() => {
                        const newHistory = history.slice(0, -1)
                        console.log(newHistory)
                        setHistory(newHistory)
                     }}
                  />
               )}
               <div
                  className={`overscroll-contain scrollbar-thin scrollbar-thumb-[#16182342] ${
                     history.length > 1 ? 'max-h-96' : ''
                  }`}
               >
                  {currentMenu.data.map((item, index) => {
                     const separateClass = item.seperate
                        ? 'border-t border-bg-gray-200'
                        : ''
                     return (
                        <Button
                           key={index}
                           to={item.to}
                           onClick={() => {
                              if (item.children) {
                                 setHistory([
                                    ...history,
                                    {
                                       header: item.children.header,
                                       data: item.children.content,
                                    },
                                 ])
                              }
                           }}
                           className={`w-full items-start justify-start py-[10px] pr-2 pl-4 hover:bg-gray-100 ${separateClass}`}
                        >
                           {item.icon && <item.icon className="mr-2 h-5 w-5" />}
                           <span className="font-semibold">{item.content}</span>
                        </Button>
                     )
                  })}
               </div>
            </Popover>
         )}
      >
         {children}
      </Tippy>
   )
}

PopoverMenu.propTypes = {
   children: PropTypes.node.isRequired,
   data: PropTypes.array.isRequired,
   delay: PropTypes.number,
   placement: PropTypes.string,
}

export default PopoverMenu
