/* This example requires Tailwind CSS v2.0+ */
import { Fragment, FC } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { classNames } from 'utils/layout/helpers/general'

type DropdownPropsType = {
  name: string
  options: string[]
}

const Dropdown: FC <DropdownPropsType> = ({ name, options }) => {
  return (
    <Menu as="div" className="relative inline-block text-left h-38px">
      <div>
        {/* eslint-disable-next-line max-len */}
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm bg-green hover:bg-green-hover focus:outline-none">
          {name}
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/*  eslint-disable-next-line max-len */}
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => {
              return <Menu.Item key={option}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-green-hover text-white' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {option}
                  </a>
                )}
              </Menu.Item>
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown