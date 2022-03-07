import { FC } from 'react'


type Props = {
  src: string
  size?: string
}

const Image: FC <Props> = ({ src, size, ...rest }) => (
  <div className={size}>
    <img src={src} alt="" className='w-10' {...rest} />
  </div>
)

export default Image
