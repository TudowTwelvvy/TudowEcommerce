'use client'

import { useCartStore } from '@/hooks/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Menu() {
  const [open, setOpen] = useState(false)

  const { counter } = useCartStore()

  return (
    <div>
      <Image
        src="/menu.png"
        alt="tudow-logo"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center gap-8 text-xl z-10">
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart({counter})</Link>
        </div>
      )}
    </div>
  )
}

export default Menu
