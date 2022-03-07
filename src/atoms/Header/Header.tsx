import { FC } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from 'store/store'
import { IconItem } from 'atoms/Icons'
import Avatar from 'atoms/Avatar'


const Header: FC = () => {

  const users = 
  useSelector<AppState, User[]>((state) => state.default.users)
  
  const firstName = users?.[0]?.firstName || ''
  const lastName = users?.[0]?.lastName || ''

  return (
    <div className='flex justify-between w-full py-4 border-2 border-b px-9 h-80px'>
      <div className='flex'>
        <IconItem name='BLogo' />
        <IconItem name='Menu' className='ml-8' />
      </div>
      <div className='flex items-center text-lg'>
        <Avatar firstName={firstName} lastName={lastName} className='bg-yellow' />
        <p className='ml-2 font-bold text-blue'>{`${firstName} ${lastName}`}</p>
      </div>
    </div>
  )
}

export default Header