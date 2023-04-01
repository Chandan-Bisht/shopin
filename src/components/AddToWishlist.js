import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const AddToWishlist = ({ open, setOpen, title }) => {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-neutral-400 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-md md:px-4 lg:max-w-lg">
                  <div className="relative text-center w-full overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl rounded-md sm:px-6 sm:pt-8 md:p-6 lg:p-6">
                    <div className="pb-6">
                      <svg
                        className="w-[80px] h-[80px] m-auto rounded-full block stroke-greencheck shadow-check stroke-2 animate-checkmark relative"
                        style={{ strokeMiterlimit: 10 }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                      >
                        <circle
                          className="stroke-2 stroke-greencheck fill-white animate-checkcircle"
                          style={{
                            strokeDasharray: 166,
                            strokeDashoffset: 166,
                            strokeMiterlimit: 10,
                          }}
                          cx="26"
                          cy="26"
                          r="25"
                          fill="none"
                        />
                        <path
                          className="animate-check origin-center"
                          style={{ strokeDasharray: 48, strokeDashoffset: 48 }}
                          fill="none"
                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {title}
                    </h2>
                    <p className="text-base leading-10 text-gray-500">
                      is added to wishlist!
                    </p>
                    <div className="mt-6 flex justify-end ">
                      <button
                        className="p-6 py-2 rounded-md text-white uppercase bg-blue-400"
                        onClick={() => setOpen(false)}
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default AddToWishlist;
