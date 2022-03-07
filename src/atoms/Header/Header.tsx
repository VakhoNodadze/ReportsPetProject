import { FC } from 'react'

import { IconItem } from 'atoms/Icons'
import Avatar from 'atoms/Avatar'


const Header: FC = () => {

  return (
    <div className='flex justify-between px-9 w-full py-4 border-2 border-b h-80px'>
      <div className='flex'>
        <IconItem name='BLogo' />
        <IconItem name='Menu' className='ml-8' />
      </div>
      <div className='flex items-center text-lg'>
        <Avatar firstName='John' lastName='Doe' className='bg-yellow' />
        <p className='ml-2 text-blue font-bold'>John Doe</p>
      </div>
    </div>
  )
}

export default Header