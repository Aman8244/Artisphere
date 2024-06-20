"use client"
import React from 'react';
import { Separator } from "@/components/ui/separator"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const path = usePathname()
  const pathname: String = path;
  
  const isActive = (path: string) => pathname === path;

  return (
    <div className=" flex flex-col md:flex-row">
      <aside className="w-full md:min-h-[100vh] sticky bottom-full top-0 md:w-64 md:sticky md:top-0  md:bg-gray-800 text-gray-100 bg-gray-800 md:h-screen">
        <nav className="p-4  ">
          <ul className='flex flex-row justify-center md:flex-col'>
            <li className="font-thin md:font-medium md:mb-4">
              <Link href="/dashboard" className={`block p-2 rounded hover:bg-gray-700 ${
                  isActive('/dashboard') ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}>Home</Link>
            </li>
            <div className='mx-[10px]'>
              <Separator orientation='vertical' className='bg-white' />
            </div>
            <li className="font-thin md:font-medium md:mb-4">
              <Link href="/dashboard/search" className={`block p-2 rounded hover:bg-gray-700 ${
                  isActive('/dashboard/search') ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}>
                Search
              </Link>
            </li>
            <div className='mx-[10px]'>
              <Separator orientation='vertical' className='bg-white' />
            </div>
            <li className="font-thin md:font-medium md:mb-4">
              <Link href="/dashboard/orders" className={`block p-2 rounded hover:bg-gray-700 ${
                  isActive('/dashboard/orders') ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}>
                Orders
              </Link>
            </li>
            <div className='mx-[10px]'>
              <Separator orientation='vertical' className='bg-white' />
            </div>
            <li className="font-thin md:font-medium md:mb-4">
              <Link href="/dashboard/favourites" className={`block p-2 rounded hover:bg-gray-700 ${
                  isActive('/dashboard/favourites') ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}>
                Favourites
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
