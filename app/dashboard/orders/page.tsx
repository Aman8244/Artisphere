import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import Navbar from '@/components/Navbar'
const Orders = () => {
  return (
    <main>
        <header className='dark'>
            <Navbar/>
        </header>
        <section>
            <DashboardLayout>
                <div>
                    Orders
                </div>
            </DashboardLayout>
        </section>
    </main>
  )
}

export default Orders