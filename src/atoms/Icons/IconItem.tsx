import { useState, FC } from 'react'
import classnames from 'classnames'

import * as icons from './index'

type IconProps = {
    name: keyof typeof icons;
    width?: number
    height?: number
    onClick?: any
    activeColor?: string
    defaultColor?: string
    className?: string
    [x:string]: any
}


const IconItem: FC <IconProps> = ({
  name, onClick, activeColor, width, height, defaultColor, className, ...rest
}) => {
  const Icon = name ? icons[name] : () => null
  const [isHovered, setIsHovered] = useState(false)


  return (
    <div className={classnames(`flex items-center ${className}`)}
      onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} {...rest}>
      <Icon width={width} height={height} name={name} color={isHovered ? activeColor : defaultColor} />
    </div>
  )
}


export default IconItem
