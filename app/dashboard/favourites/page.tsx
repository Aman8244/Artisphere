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
                        <div>
                            <div>
                                <h1 className='md:text-2xl '>
                                    Favourites
                                </h1>
                            </div>
                        </div>
                    </div>
                </DashboardLayout>
            </section>
        </main>
    )
}

export default Favourites