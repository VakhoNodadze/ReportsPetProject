import { FC } from 'react'

import { IconItem } from 'atoms/Icons'

const Sidebar = () => {
  return (
    <div className='h-100vh-80px z-50 flex flex-col overflow-x-hidden bg-white px-10'>
      <div className='flex flex-col mt-10'>
        {[...Array(5)].map((_, index) => {
        //@ts-ignore:next-line
          return <IconItem key={`Sidebar${index}`} name={`Sidebar${index}`} className='mt-5 cursor-pointer' />
        }) }
      </div>
    </div>
  )
}

export default Sidebar