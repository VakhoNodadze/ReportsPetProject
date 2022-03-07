/* eslint-disable max-len */
import { FC } from 'react'

type Sidebar3PropTypes = {
    width?: number | string
    height?: number | string
}

export const Sidebar3: FC <Sidebar3PropTypes> = ({ width, height }) => {

  return (
    <svg width={width || 25} height={height || 25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.882 13.21H12.772L4.21198 21.77C5.96046 23.3099 8.10567 24.3287 10.404 24.7107C12.7024 25.0928 15.0619 24.8227 17.2145 23.9313C19.3671 23.0398 21.2266 21.5626 22.582 19.6675C23.9373 17.7724 24.7341 15.5352 24.882 13.21Z" fill="#2DAEE5"/>
      <path d="M3.112 20.66C1.57115 18.9126 0.551492 16.768 0.168971 14.4699C-0.213549 12.1718 0.0564146 9.81243 0.948167 7.66014C1.83992 5.50785 3.31768 3.64895 5.21343 2.2948C7.10917 0.940651 9.34684 0.145584 11.672 0V12.11L3.112 20.67V20.66Z" fill="#2DAEE5"/>
      <path d="M13.232 0V11.65H24.882C24.6951 8.62141 23.4076 5.76557 21.262 3.61996C19.1164 1.47435 16.2606 0.186932 13.232 0V0Z" fill="#005B97"/>
    </svg>
  )
}

export default Sidebar3
