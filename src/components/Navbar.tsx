'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import dynamic from 'next/dynamic'
import CartModal from './CartModal'
import { useCartStore } from '@/hooks/useCartStore'
//import NavIcons from './NavIcons'
const NavIcons = dynamic(() => import('./NavIcons'), { ssr: false })

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { counter } = useCartStore()
  return (
    <div className=" h-20 px-4 md:px-8 lg:px-16  relative">
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl  tracking-wide">TUDOWshop</div>
        </Link>
        <div
          className="relative cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        >
          <Image src="/cart.png" alt="" width={22} height={22} />
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-tudow rounded-full text-white text-sm flex items-center justify-center">
            {counter}
          </div>
        </div>
        {isCartOpen && (
          <div className="mt-7 ml-4 absolute right-7 top-0 ">
            <CartModal />
          </div>
        )}
        <Menu />
      </div>

      {/*bigger screenss*/}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="tudow-logo" width={24} height={24} />
            <div className="text-2xl font-medium tracking-wide">TUDOWshop</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/list">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>

        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
