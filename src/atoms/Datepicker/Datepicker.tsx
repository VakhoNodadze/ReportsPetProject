import { useEffect, useState, useRef } from 'react'



type DatePickerProps = {
    setInputs: (inputs: any) => void;
    inputs: any;
    name: string;
    isOpen: boolean 
    setIsOpen: any
  }

const Datepicker = ({ inputs, setInputs, name, isOpen, setIsOpen }: DatePickerProps) => {
  type DirectionType = 'left' | 'right';


  const [activeDay, setActiveDay] = useState(new Date().getDate())
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth())
  const [activeYear, setActiveYear] = useState(new Date().getFullYear())

  const daysNames = ['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su']
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const updateActiveMonthAndYear = (direction: DirectionType) => {
    if (direction === 'left') {
      let localYear = activeYear
      let localMonth = activeMonth
      if (localMonth === 0) {
        localMonth = 11
        localYear--
      } else localMonth--

      setActiveMonth(localMonth)
      setActiveYear(localYear)
    }
    if (direction === 'right') {
      let localYear = activeYear
      let localMonth = activeMonth
      if (localMonth === 11) {
        localMonth = 0
        localYear++
      } else localMonth++

      setActiveMonth(localMonth)
      setActiveYear(localYear)
    }
    setActiveDay(0)

    let localInputs = { ...inputs }
    localInputs[name] = `${activeMonth + 1}/${activeDay + 1}/${activeYear}`
    // setInputs(localInputs)
  }
  const datepickerEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // let localInputs = { ...inputs }
    // localInputs[name] = `${activeMonth + 1}/${activeDay + 1}/${activeYear}`
    setInputs(`${activeMonth + 1}/${activeDay + 1}/${activeYear}`)
  }, [activeDay, activeMonth, activeYear])
  
  // scroll to bottom of the date end
  useEffect(() => {
    const node = datepickerEndRef.current
    node?.scrollIntoView({ behavior: 'smooth' })
  }, [isOpen])


  return (
    <div className="block bg-green rounded-md w-120px h-38px">
      <div
        className="flex items-center justify-between h-full px-5 py-1 border border-white rounded-md cursor-pointer bg-darkest border-opacity-20"
        onClick={setIsOpen}
      >
        <h2 className="text-white text-sm mr-2">
          {activeMonth + 1}/{activeDay + 1}/{activeYear}
        </h2>
        <i className="text-white fal fa-calendar text-sm"></i>
      </div>
      {isOpen && (
        <>
          <div className="absolute grid w-200px grid-cols-7 px-2 py-2 mt-1 bg-darkest gap-y-3 bg-gray-50">
            <div className="flex items-center justify-between px-4 pt-2 col-span-full">
              <div
                className="flex items-center cursor-pointer group"
                onClick={() => {
                  setActiveDay(new Date().getDate())
                  setActiveMonth(new Date().getMonth())
                  setActiveYear(new Date().getFullYear())
                }}
              >
                <h2 className="text-sm text-white text-opacity-50 duration-300 group-hover:text-opacity-90">
                Reset
                </h2>
              </div>

              <div
                className="flex items-center cursor-pointer group"
                onClick={setIsOpen}
              >
                <i className="mr-2 text-black text-opacity-50 duration-300 fal fa-times group-hover:text-opacity-90 text-md"></i>
                <h2 className="text-sm text-black text-opacity-50 duration-300 group-hover:text-opacity-90">
                Close
                </h2>
              </div>
            </div>

            {/* Months names and arrows */}
            <div className="flex items-center justify-between px-4 pb-8 col-span-full">
              <i
                className="text-xl cursor-pointer fas text-purple fa-caret-left"
                onClick={() => updateActiveMonthAndYear('left')}
              ></i>
              <h2 className="text-black text-opacity-60">
                {monthNames[activeMonth]}, {activeYear}
              </h2>
              <i
                className="text-xl cursor-pointer fas text-purple fa-caret-right"
                onClick={() => updateActiveMonthAndYear('right')}
              ></i>
            </div>

            {/* Days names */}
            {daysNames.map((dayName) => (
              <div className="col-span-1 mb-4 text-center">{dayName}</div>
            ))}

            {/* Days fillers */}
            {Array.from(
              Array(new Date(activeYear, activeMonth, 1).getDay()).keys()
            ).map(() => (
              <div className="col-span-1 opacity-0">.</div>
            ))}

            {/* Days */}
            {Array.from(
              Array(32 - new Date(activeYear, activeMonth, 32).getDate()).keys()
            ).map((day) => (
              <div
                className="flex items-center justify-center col-span-1"
                onClick={() => {
                  setActiveDay(day)
                  setIsOpen()
                }}
              >
                <h2
                  className={`w-8 h-8 flex items-center justify-center cursor-pointer rounded-full ${
                    new Date().getDate() === day &&
                  new Date().getMonth() === activeMonth &&
                  new Date().getFullYear() === activeYear
                  // HACK: this doesn't work as expected?
                      ? ''
                      : 'bg-purple bg-opacity-0 hover:bg-opacity-30'
                  } ${
                    activeDay === day
                      ? 'bg-purple bg-opacity-100'
                      : 'bg-purple bg-opacity-0 hover:bg-opacity-30'
                  } duration-300`}
                >
                  {day + 1}
                </h2>
              </div>
            ))}
            <div ref={datepickerEndRef} className='absolute bottom-0' />
          </div>
        </>
      )}
    </div>
  )
}


export default Datepicker
