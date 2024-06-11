"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { UserButton, useAuth } from '@clerk/nextjs'
const Navbar = () => {
  const { userId } = useAuth()

  return (
    <>
      <nav className="bg-white  border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Artisphere</span>
          </Link>
          <Button className='dark:bg-white rounded' asChild>
            {userId ?
              <UserButton /> : <Link href="/login">Login</Link>
            }
          </Button>
        </div>
      </nav>

    </>
  )
}

export default Navbar