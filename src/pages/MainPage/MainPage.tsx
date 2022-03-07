import { useState } from 'react'

import Dropdown from 'atoms/Dropdown'
import Datepicker from 'atoms/Datepicker'

const DUMMY_OPTIONS = ['Project 0', 'Project 1', 'Project 2', 'Project 3', 'Project 4']

const MainPage = () => {

  const [fromDate, setFromDate] = useState<string>('')
  const [toDate, setToDate] = useState<string>('')
  const [isOpenFrom, setIsOpenFrom] = useState(false)
  const [isOpenTo, setIsOpenTo] = useState(false)

  const handleDateFromOpen = () => {
    setIsOpenFrom((prev) => !prev)
    if(isOpenTo)
      setIsOpenTo(false)
  }
  const handleDateToOpen = () => {
    setIsOpenTo((prev) => !prev)
    if(isOpenFrom)
      setIsOpenFrom(false)
  }
  
  return (
    <div className='flex flex-col mt-8 w-full'>
      <div className='flex justify-between w-full'>
        <div className='flex flex-col'>
          <h2 className='font-bold text-2xl text-black-dark'>Reports</h2>
          <p className='font-bold text-gray'>Easily generate a report of your transactions</p>
        </div>
        <div className='flex'>
          <Dropdown name='All Projects' options={DUMMY_OPTIONS} />
          <div className='ml-2'>
            <Dropdown name='All Projects' options={DUMMY_OPTIONS} />
          </div>
          <div className='ml-2'>
            <Datepicker inputs={fromDate} setInputs={setFromDate} name="startingDate" isOpen={isOpenFrom} setIsOpen={handleDateFromOpen} />
          </div>
          <div className='ml-2'>
            <Datepicker inputs={toDate} setInputs={setToDate} name="startingDate" isOpen={isOpenTo} setIsOpen={handleDateToOpen}/>
          </div>
          <div className='ml-2'>
            <button className='h-38px bg-blue flex text-center text-white rounded-md text-sm w-120px items-center justify-center'>
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage