import { FC } from 'react'

import Header from 'atoms/Header'
import Sidebar from 'atoms/Sidebar'

const Default: FC = ({ children }) => {

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex pr-9'>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default Default