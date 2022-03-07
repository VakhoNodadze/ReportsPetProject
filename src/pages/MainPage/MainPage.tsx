import { useState } from 'react'

import Dropdown from 'atoms/Dropdown'
import Datepicker from 'atoms/Datepicker'
import { IconItem } from 'atoms/Icons'

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

  const renderEmptyPage = () => (
    <div className='flex flex-col items-center justify-center w-1/3 h-full m-auto text-center h-100vh-168px'>
      <h2 className='text-2xl font-bold text-black-dark'>
        No Reports
      </h2>
      <p className='mb-10 font-bold text-gray'>
        Currently you have no data for the reports to be generated.
        Once you start generating traffic through the Balance application 
        the reports will be shown.
      </p>
      <IconItem name='NoDataBackground' />
    </div>
  )
  
  return (
    <div className='flex flex-col w-full mt-8'>
      <div className='flex justify-between w-full'>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold text-black-dark'>Reports</h2>
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
            <button className='flex items-center justify-center text-sm text-center text-white rounded-md h-38px bg-blue w-120px'>
              Generate Report
            </button>
          </div>
        </div>
      </div>
      {renderEmptyPage()}
    </div>
  )
}

export default MainPage