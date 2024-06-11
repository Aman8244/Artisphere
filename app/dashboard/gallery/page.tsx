import DashboardLayout from '@/components/DashboardLayout'
import Navbar from '@/components/Navbar'
import React from 'react'

const Gallery = () => {
  return (
    <main>
        <header className='dark'>
            <Navbar/>
        </header>
        <section>
            <DashboardLayout>
                <div>
                    Gallery
                </div>
            </DashboardLayout>
        </section>
    </main>
  )
}

export default Gallery