import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductList() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md hover:opacity-0 transition-opacity easy duration-500 z-10 "
          />
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">R2600</span>
        </div>
        <div className="text-sm text-gray-500">my description</div>
        <button className="rounded-2xl ring-1 ring-tudow text-tudow w-max py-2 px-4 text-xs hover:bg-tudow hover:text-white">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md hover:opacity-0 transition-opacity easy duration-500 z-10 "
          />
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">R2600</span>
        </div>
        <div className="text-sm text-gray-500">my description</div>
        <button className="rounded-2xl ring-1 ring-tudow text-tudow w-max py-2 px-4 text-xs hover:bg-tudow hover:text-white">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md hover:opacity-0 transition-opacity easy duration-500 z-10 "
          />
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">R2600</span>
        </div>
        <div className="text-sm text-gray-500">my description</div>
        <button className="rounded-2xl ring-1 ring-tudow text-tudow w-max py-2 px-4 text-xs hover:bg-tudow hover:text-white">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md hover:opacity-0 transition-opacity easy duration-500 z-10 "
          />
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">R2600</span>
        </div>
        <div className="text-sm text-gray-500">my description</div>
        <button className="rounded-2xl ring-1 ring-tudow text-tudow w-max py-2 px-4 text-xs hover:bg-tudow hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  )
}

export default ProductList
