import React, { FC } from 'react'
import classnames from 'classnames'


import Image from '../Image'

type Props = {
    children?: JSX.Element[] | JSX.Element
    rounded?: boolean
    textColor?: string
    borderColor?: string
    bgColor?: string
    firstName?: string
    lastName?: string
    avatar?: string
    className?: string
    onClick?: Function | null;
    [x: string]: any;
}


const Avatar: FC<Props> = ({
  children,
  avatar,
  rounded = false,
  bgColor = 'transparent',
  borderColor = 'white',
  textColor = 'white',
  firstName,
  className,
  lastName,
  onClick
}) => {

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  if (avatar) {
    return (
      <div className="relative flex">
        <div
          className={classnames(
            `flex bg-${bgColor} text-${textColor} w-11 h-11 ${className}
            ${rounded ? 'rounded-full' : 'rounded-md'} cursor-pointer` 
          )}
          onClick={handleClick}
        >
          <Image src={avatar} />
        </div>
      </div>
    )
  }

  return (
    <div
      className={classnames(
        `flex justify-center items-center bg-${bgColor} text-${textColor} border-${borderColor} w-11 h-11
         ${rounded ? 'rounded-full' : 'rounded-md'} cursor-pointer ${className}`
      )}
      onClick={handleClick}
    >
      <span className='text-2xl text-white'>
        {firstName && firstName.slice(0, 1).toUpperCase()}
      </span>
      <span className='text-2xl text-white'>
        {lastName && lastName.slice(0, 1).toUpperCase()}
      </span>
      {children}
    </div>
  )
}


export default React.memo(Avatar)
