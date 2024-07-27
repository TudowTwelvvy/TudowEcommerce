'use client'

import { useCartStore } from '@/hooks/useCartStore'
import { useWixClient } from '@/hooks/useWixClient'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Menu() {
  const [open, setOpen] = useState(false)

  const { counter } = useCartStore()

  const wixClient = useWixClient()
  const isLoggedIn = wixClient.auth.loggedIn()

  return (
    <div className="z-50">
      <Image
        src="/menu.png"
        alt="tudow-logo"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center gap-8 text-xl z-99">
          <Link href="/list" onClick={() => setOpen(false)}>
            Shop
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            Contact
          </Link>
          {!isLoggedIn && (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}
          <Link href="/" onClick={() => setOpen(false)}>
            Cart({counter})
          </Link>
        </div>
      )}
    </div>
  )
}

export default Menu
