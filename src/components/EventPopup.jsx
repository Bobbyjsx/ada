/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Upcoming from "./Upcoming";
import faguwa from "../assets/faguwa.jpg";

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white/30 backdrop-blur-md p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className="text-xl font-bold leading-6 text-black  mb-5 underline">
                    Upcoming Events
                  </Dialog.Title>
                  <div className="flex flex-row flex-wrap items-start justify-evenly w-full gap-y-16">
                    {Upcoming.map((item) => {
                      return (
                        <div key={item.id} className="flex flex-row items-start justify-start">
                          <div className="flex flex-col gap-4 ">
                            <img
                              src={faguwa}
                              alt="Event banner"
                              className="w-72 h-72 rounded-md shadow-2xl border-2 border-yellow-600 bg-white hover:scale-110 duration-500 ease-in-out"
                              key={item.id}
                            />
                            <div className="w-72 px-2 ">
                              <h2 className="text-lg font-bold text-black">{item.title}</h2>
                              <p className="text-base font-medium text-gray-700 mt-2">
                                {item.description}
                              </p>
                            </div>
                            <div className="w-72 px-2">
                              <h3 className="text-lg font-semibold text-black">Date:</h3>
                              <p className="text-base font-medium text-gray-700">{item.date}</p>
                            </div>
                            <div className="w-72 px-2">
                              <h3 className="text-lg font-semibold text-black">Venue:</h3>
                              <p className="text-base font-medium text-gray-700 capitalize">
                                {item.venue}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 "
                      onClick={closeModal}>
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
