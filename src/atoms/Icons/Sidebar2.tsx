/* eslint-disable max-len */
import { FC } from 'react'

type Sidebar2PropTypes = {
    width?: number | string
    height?: number | string
}

export const Sidebar2: FC <Sidebar2PropTypes> = ({ width, height }) => {

  return (
    <svg width={width || 25} height={height || 24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.3" d="M18.6703 22.2203C18.1793 22.215 17.7018 22.0586 17.3028 21.7723C16.9038 21.486 16.6026 21.0838 16.4403 20.6203C16.4403 20.5303 16.4403 20.4403 16.3603 20.4403H8.44032C8.44032 20.5303 8.44032 20.6203 8.36032 20.6203C8.23016 21.0858 7.94969 21.4951 7.56261 21.7845C7.17553 22.0739 6.70358 22.2271 6.22032 22.2203C5.98428 22.2203 5.7579 22.3141 5.591 22.481C5.42409 22.6479 5.33032 22.8743 5.33032 23.1103C5.33032 23.3464 5.42409 23.5727 5.591 23.7396C5.7579 23.9065 5.98428 24.0003 6.22032 24.0003H18.6703C18.9064 24.0003 19.1327 23.9065 19.2996 23.7396C19.4666 23.5727 19.5603 23.3464 19.5603 23.1103C19.5603 22.8743 19.4666 22.6479 19.2996 22.481C19.1327 22.3141 18.9064 22.2203 18.6703 22.2203Z" fill="black"/>
      <path d="M14.2203 11.5603H16.0003C16.2364 11.5603 16.4627 11.4665 16.6296 11.2996C16.7966 11.1327 16.8903 10.9063 16.8903 10.6703C16.8903 10.4343 16.7966 10.2079 16.6296 10.041C16.4627 9.87407 16.2364 9.7803 16.0003 9.7803H14.2203C13.9843 9.7803 13.7579 9.87407 13.591 10.041C13.4241 10.2079 13.3303 10.4343 13.3303 10.6703C13.3303 10.9063 13.4241 11.1327 13.591 11.2996C13.7579 11.4665 13.9843 11.5603 14.2203 11.5603Z" fill="#CDCCCC"/>
      <path d="M22.2203 0.000308941H2.67031C2.31819 -0.00508849 1.96857 0.0602862 1.64219 0.192555C1.31582 0.324824 1.01932 0.521293 0.770309 0.770309C0.521293 1.01932 0.324824 1.31582 0.192555 1.64219C0.0602862 1.96857 -0.00508849 2.31819 0.000308941 2.67031V16.0003C-0.00508849 16.3524 0.0602862 16.702 0.192555 17.0284C0.324824 17.3548 0.521293 17.6513 0.770309 17.9003C1.01932 18.1493 1.31582 18.3458 1.64219 18.4781C1.96857 18.6103 2.31819 18.6757 2.67031 18.6703H22.2203C22.5724 18.6757 22.922 18.6103 23.2484 18.4781C23.5748 18.3458 23.8713 18.1493 24.1203 17.9003C24.3693 17.6513 24.5658 17.3548 24.6981 17.0284C24.8303 16.702 24.8957 16.3524 24.8903 16.0003V2.67031C24.8957 2.31819 24.8303 1.96857 24.6981 1.64219C24.5658 1.31582 24.3693 1.01932 24.1203 0.770309C23.8713 0.521293 23.5748 0.324824 23.2484 0.192555C22.922 0.0602862 22.5724 -0.00508849 22.2203 0.000308941ZM19.5603 12.4403C19.5603 12.6741 19.5143 12.9055 19.4248 13.1215C19.3354 13.3374 19.2042 13.5337 19.039 13.699C18.8737 13.8642 18.6774 13.9954 18.4615 14.0848C18.2455 14.1743 18.0141 14.2203 17.7803 14.2203H7.11031C6.63822 14.2203 6.18547 14.0328 5.85166 13.699C5.51784 13.3651 5.33031 12.9124 5.33031 12.4403V8.89031H19.5603V12.4403ZM19.5603 7.11031H5.33031V6.22031C5.33031 5.74822 5.51784 5.29547 5.85166 4.96166C6.18547 4.62784 6.63822 4.44031 7.11031 4.44031H17.7803C18.0141 4.44031 18.2455 4.48635 18.4615 4.5758C18.6774 4.66526 18.8737 4.79637 19.039 4.96166C19.2042 5.12695 19.3354 5.32317 19.4248 5.53913C19.5143 5.75509 19.5603 5.98656 19.5603 6.22031V7.11031Z" fill="#CDCCCC"/>
    </svg>

  )
}

export default Sidebar2
