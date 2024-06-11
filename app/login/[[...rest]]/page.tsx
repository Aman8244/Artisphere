"use client"
import Navbar from '@/components/Navbar'
import { SignIn, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const {user} = useUser();
  const router = useRouter();
  if(user){
     router.push("/dashboard")
  }
  return (
    <main>
        <header className='dark'>
            <Navbar/>
        </header>
        <section>
            <div className='flex justify-center items-center'>
              <div className='pt-8'>
                <SignIn forceRedirectUrl={"/dashboard"}/>
              </div>
            </div>
        </section>
    </main>
  )
}

export default Login