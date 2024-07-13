'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function SearchBar() {
  const router = useRouter()
  const [inputText, setInputText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputText) {
      router.push(`/list?name=${inputText}`)
    }
  }

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name=""
        placeholder="Search"
        className="flex-1 outline-none bg-transparent"
        onChange={handleChange}
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="searchIcon" width={16} height={16} />
      </button>
    </form>
  )
}

export default SearchBar
