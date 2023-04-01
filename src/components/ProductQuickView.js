import React, { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { Add, Close, Remove, Star } from "@mui/icons-material";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductQuickView = ({ product, handler, i }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(product);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { title, id, price, image } = product

  // const addToCart = (i) => {
  //   setItems((state) =>
  //     state.map((item, p) => {
  //       if (i === p) {
  //         setCart([
  //           ...cart,
  //           { name: item.title, price: item.price, quantity: item.quantity },
  //         ]);
  //         return { ...item, inCart: true };
  //       }
  //       return item;
  //     })
  //   );
  // };


  const increaseQuantity = {
    inCart: (i) => {
      setCart((state) =>
        state.map((item, o) => {
          if (i === o && item.quantity < 10) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    },
    inItems: (i) => {
      setItems((state) =>
        state.map((item, o) => {
          if (o === i && item.quantity < 10) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    },
  };

  const decreaseQuantity = {
    inCart: (i) => {
      setCart((prevCart) =>
        prevCart.map((item, o) => {
          if (i === o && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    },
    inItems: (i) => {
      setItems((state) =>
        state.map((item, o) => {
          if (o === i && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    },
  };

  const removeFromCart = (i) => {
    let chosenItem, index;
    index = 0;
    while (index < cart.length) {
      if (index === i) {
        chosenItem = cart[index].name;
        break;
      }
      index++;
    }
    setCart((state) => state.filter((item) => chosenItem !== item.name));
    setItems((state) =>
      state.map((item) => {
        if (item.name === chosenItem) {
          return { ...item, inCart: false, quantity: 1 };
        }
        return item;
      })
    );
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="px-8 py-2 bg-gray-50 text-gray-800 hover:bg-black hover:text-white rounded-full"
      >
        Quick View
      </button>
      <Transition.Root show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setModalOpen}>
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
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                      onClick={() => setModalOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <Close className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                      <div className="sm:col-span-4 lg:col-span-5">
                        <div className="p-4 bg-gray-100 rounded-lg aspect-w-2 aspect-h-3 overflow-hidden">
                          <img
                            src={items.image}
                            alt={product.title}
                            className="object-cover object-center"
                          />
                        </div>
                        <p className="py-6 text-base text-center font-medium">
                          <a
                            href=""
                            className="text-violet-700 hover:text-violet-500"
                          >
                            View full details
                          </a>
                        </p>
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                          {product.title}
                        </h2>
                        <section
                          aria-labelledby="information-heading"
                          className="mt-2"
                        >
                          <h3 id="information-heading" className="sr-only">
                            Product Information
                          </h3>

                          {/* Reviews */}
                          <div className="mt-2">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center border px-2 py-px w-fit cursor-pointer hover:border-gray-900">
                              <div className="flex items-center mr-2">
                                <p className="text-sm font-medium text-gray-900">
                                  {product.rating}
                                </p>
                                <Star
                                  className="text-gray-900"
                                  style={{ width: "1rem" }}
                                  aria-hidden="true"
                                />
                              </div>
                              <p className="sr-only">
                                {product.rating} out of 5 stars
                              </p>
                              <p className="-mt-1">|</p>
                              <a
                                href="/"
                                className="ml-2 text-sm font-medium text-violet-600 hover:text-violet-500"
                              >
                                {product.reviewCount} reviews
                              </a>
                            </div>
                          </div>
                          <hr className="mt-4 border-gray-200 w-96" />
                          <p className="mt-4 text-2xl text-gray-900 font-semibold">
                            &#8377;{product.price}
                          </p>
                        </section>

                        <section
                          aria-labelledby="options-heading"
                          className="mt-10"
                        >
                          <h3 id="options-heading" className="sr-only">
                            Product options
                          </h3>

                          {/* Sizes */}
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900">
                              Size
                            </h4>
                            <a
                              href="/"
                              className="text-sm font-medium text-violet-600 hover:text-violet-500"
                            >
                              Size guide
                            </a>
                          </div>
                          <RadioGroup
                            value={selectedSize}
                            onChange={setSelectedSize}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a size
                            </RadioGroup.Label>
                            <div className="grid grid-cols-4 gap-4">
                              {product.sizes.map((size) => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ active }) =>
                                    classNames(
                                      size.inStock
                                        ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                        : "cursor-not-allowed bg-gray-50 text-gray-200",
                                      active ? "ring-2 ring-violet-500" : "",
                                      "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <RadioGroup.Label as="span">
                                        {size.name}
                                      </RadioGroup.Label>
                                      {size.inStock ? (
                                        <span
                                          className={classNames(
                                            active ? "border" : "border-2",
                                            checked
                                              ? "border-violet-500"
                                              : "border-transparent",
                                            "pointer-events-none absolute -inset-px rounded-md"
                                          )}
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <span
                                          aria-hidden="true"
                                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                        >
                                          <svg
                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            stroke="currentColor"
                                          >
                                            <line
                                              x1={0}
                                              y1={100}
                                              x2={100}
                                              y2={0}
                                              vectorEffect="non-scaling-stroke"
                                            />
                                          </svg>
                                        </span>
                                      )}
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-900">
                              Quantity
                            </h4>
                            <div className="flex items-center mt-4 border rounded-sm w-40">
                              <button
                                onClick={() => decreaseQuantity.inItems(i)}
                                className="border-r p-2"
                              >
                                <Remove
                                  className="text-gray-800"
                                  style={{ fontSize: "24px" }}
                                />
                              </button>
                              <div className="bg-gray-50 p-6 py-2 border-r w-96 text-center">
                                <p>{product.quantity}</p>
                              </div>
                              <button
                                onClick={() => increaseQuantity.inItems(i)}
                                className="p-2"
                              >
                                <Add
                                  className="text-gray-800"
                                  style={{ fontSize: "24px" }}
                                />
                              </button>
                            </div>
                          </div>
                          {!product.inCart && (
                            <button
                              type="button"
                              onClick={() => handler({ title, price, id, quantity: 1, image })}
                              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-violet-600 py-3 px-8 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                            >
                              Add to Cart
                            </button>
                          )}
                          {product.inCart && (
                            <button
                              type="button"
                              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-violet-600 py-3 px-8 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                            >
                              Added to Cart! Check now
                            </button>
                          )}
                        </section>
                      </div>
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

export default ProductQuickView;
