import HeadlessTippy from '@tippyjs/react/headless'
import { useState } from 'react'
import Button from '../Button/Button'
import Popover from './Popover'
import PopoverHeader from './PopoverHeader'

function PopoverMenu({ children, data, delay, placement }) {
   const [history, setHistory] = useState([{ data }])
   const currentMenu = history[history.length - 1]

   return (
      <HeadlessTippy
         hideOnClick={false}
         offset={[12, 8]}
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
               {}
               <div
                  className={`overflow-y-auto scrollbar scrollbar-thumb-slate-200 overscroll-contain ${
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
                           className={`hover:bg-gray-100 items-start justify-start py-[10px] pr-2 pl-4 w-full ${separateClass}`}
                        >
                           {item.icon && <item.icon className="w-5 h-5 mr-2" />}
                           <span className="font-semibold">{item.content}</span>
                        </Button>
                     )
                  })}
               </div>
            </Popover>
         )}
      >
         {children}
      </HeadlessTippy>
   )
}

export default PopoverMenu
