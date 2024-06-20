"use client"
import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import Navbar from '@/components/Navbar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@clerk/nextjs'
import { favDataProps } from '../favourites/page'
import FetchOrders from '@/helpers/fetchOrders'
interface Orders {
    orderItem: favDataProps[]
}
const Orders = () => {
    const [data, setData] = useState<Orders>();
    const router = useRouter();
    const { userId } = useAuth();

    useEffect(() => {
        if (!userId) {
            router.push("/login")
        }
        else
            FetchOrders(setData);
    }, [])

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
                                <h1 className='md:text-2xl md:my-4'>
                                    Orders
                                </h1>
                            </div>
                            <div>
                                <div>
                                    {data && data.orderItem &&
                                        <div className='md:flex md:flex-row'>
                                            <div className='md:flex md:flex-row'>
                                                {data.orderItem.map((item, key) => {
                                                    return <Card key={key} className='mx-1 p-0'>
                                                        <CardHeader>
                                                            <Image onClick={() => {
                                                                router.push(`/painting/${item.artistId}?artname=${item.artName}`)
                                                            }} src={item.image.toString()} alt='product' height={400} width={200} />
                                                        </CardHeader>
                                                        <CardContent onClick={() => {
                                                            router.push(`/painting/${item.artistId}?artname=${item.artName}`)
                                                        }}>
                                                            <CardTitle>
                                                                {item.artName}
                                                            </CardTitle>
                                                            <CardDescription>
                                                                <p>
                                                                    {item.description}
                                                                </p>
                                                                <p className='text-green-700'>
                                                                    &#x20B9; {item?.price?.toString()}
                                                                </p>
                                                            </CardDescription>
                                                        </CardContent>
                                                        <CardFooter>
                                                            {item.artistName}
                                                        </CardFooter>
                                                    </Card>
                                                })}

                                            </div>

                                        </div>
                                    }
                                    {data && data.orderItem && data.orderItem[0] ? <></> : <div className='flex flex-col justify-center min-h-[60vh] items-center'>
                                        <img className='max-h-[40vh]' src='/empty.webp' alt='loading bar' />
                                        <div>
                                            <Button className='bg-purple-500 text-white hover:bg-purple-300 hover:text-black' onClick={() => { router.push("/dashboard") }}>
                                                Go To Home
                                            </Button>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </DashboardLayout>
            </section>
        </main>
    )
}

export default Orders