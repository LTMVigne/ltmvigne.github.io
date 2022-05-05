/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const NavBar = () => {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start w-fit lg:flex-none">
            <a className="font-bold text-3xl" href="#">
              LTM
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex w-fit justify-center">
            <a href="#" className="mx-4 text-xl font-medium text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="mx-4 text-xl font-medium text-gray-700 hover:text-gray-900">
              Project
            </a>
          </Popover.Group>

          <Popover.Group as="nav" className="hidden md:flex w-fit justify-center">
            <a href="#" className="text-xl font-medium text-gray-700 hover:text-gray-900">
              About
            </a>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="font-bold text-2xl">LTM</div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8 ">
                  <a href="index" className="text-xl font-medium text-gray-700 hover:text-gray-900">
                    Home
                  </a>
                </nav>
                <nav className="grid gap-y-8 text-lg">
                  <a href="index" className="text-xl font-medium text-gray-700 hover:text-gray-900">
                    Project
                  </a>
                </nav>
                <nav className="grid gap-y-8 text-lg">
                  <a href="index" className="text-xl font-medium text-gray-700 hover:text-gray-900">
                    About
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavBar;
