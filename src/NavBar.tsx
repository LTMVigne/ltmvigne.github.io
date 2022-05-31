/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full flex justify-between items-center border-b-2 border-gray-100 py-6 lg:space-x-10">
          <div className="flex justify-start w-fit lg:flex-none">
            <a className="font-bold text-3xl" href="#">
              LTM
            </a>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden lg:flex w-fit justify-center">
            <a href="#" className="mx-4 text-xl font-medium text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#intro" className="mx-4 text-xl font-medium text-gray-700 hover:text-gray-900">
              Project
            </a>
            <a href="#processus" className="mx-4 text-xl font-medium text-gray-700 hover:text-gray-900">
              Processus
            </a>
            <a href="#cadastre" className="mx-4 text-xl font-medium text-gray-700 hover:text-gray-900">
              Cadastres
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                    )}
                  >
                    <span className="mx-4 text-xl font-medium text-gray-700 hover:text-gray-900">Dynamique</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            {`Contexte historique`}
                          </a>
                          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            {`L'arrivée de la gare`}
                          </a>
                          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            {`L'urbanisation`}
                          </a>
                          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            {`Les espaces verts`}
                          </a>
                          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            {`Aujourd'hui`}
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <a href="#source" className="mx-4 text-xl font-medium text-gray-700 hover:text-gray-900">
              Métiers
            </a>
          </Popover.Group>

          <Popover.Group className="hidden lg:flex w-fit justify-center">
            <a href="#source" className="mx-4 text-xl font-medium text-gray-700 hover:text-gray-900">
              Sources
            </a>
            <a href="#about" className="mx-4 text-xl font-medium text-gray-700 hover:text-gray-900">
              A Propos
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
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="font-bold text-2xl">LTM</div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
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
                  <a href="#intro" className="text-xl font-medium text-gray-700 hover:text-gray-900">
                    Project
                  </a>
                </nav>
                <nav className="grid gap-y-8 text-lg">
                  <a href="#processus" className="text-xl font-medium text-gray-700 hover:text-gray-900">
                    Processus
                  </a>
                </nav>
                <nav className="grid gap-y-8 text-lg">
                  <a href="#cadastre" className="text-xl font-medium text-gray-700 hover:text-gray-900">
                    Cadastres
                  </a>
                </nav>
                <nav className="grid gap-y-8 text-lg">
                  <a href="#dynamique" className="text-xl font-medium text-gray-700 hover:text-gray-900">
                    Dynamique
                  </a>
                </nav>
                <nav className="grid gap-y-8 text-lg">
                  <a href="#dynamique" className="text-xl font-medium text-gray-700 hover:text-gray-900">
                    Métiers
                  </a>
                </nav>
                <nav className="grid gap-y-8 text-lg">
                  <a href="#source" className="text-xl font-medium text-gray-700 hover:text-gray-900">
                    Sources
                  </a>
                </nav>
                <nav className="grid gap-y-8 text-lg">
                  <a href="#about" className="text-xl font-medium text-gray-700 hover:text-gray-900">
                    A Propos
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
