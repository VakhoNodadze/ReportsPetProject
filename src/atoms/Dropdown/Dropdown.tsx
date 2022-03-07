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
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green text-sm font-medium text-gray-700 hover:bg-green-hover focus:outline-none">
          {name}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            {options.map((option) => {
              return <Menu.Item>
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