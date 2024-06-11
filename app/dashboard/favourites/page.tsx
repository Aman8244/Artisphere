import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import Navbar from '@/components/Navbar'
const Favourites = () => {
    return (
        <main>
            <header className='dark'>
                <Navbar />
            </header>
            <section>
                <DashboardLayout>
                    <div>
                        Favourites
                    </div>
                </DashboardLayout>
            </section>
        </main>
    )
}

export default Favourites