"use client"
import DashboardLayout from '@/components/DashboardLayout'
import Navbar from '@/components/Navbar'
import FetchProductDetail from '@/helpers/fetchProductDetail'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


interface ProductInterface {
    data:Object;
}
const PaintingDetail = () => {
    const path = usePathname()
    const artistId: String = path.slice(10,);
    const artquery = useSearchParams();
    const artName = artquery.get("artname")
    const [productDetail, setProductDetail] = useState<ProductInterface>()
    useEffect(() => {
        FetchProductDetail(artistId,artName!, setProductDetail);
    }, [])
    console.log(productDetail)

    return (
        <main>
            <header className='dark'>
                <Navbar />
            </header>
            <section>
                <DashboardLayout>
                    <div>
                        Product Id :
                    </div>
                </DashboardLayout>
            </section>
        </main>
    )
}

export default PaintingDetail