"use client"
import DashboardLayout from '@/components/DashboardLayout'
import Navbar from '@/components/Navbar'
import FetchProductDetail from '@/helpers/fetchProductDetail'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useAuth } from '@clerk/nextjs'
import { toast } from '@/components/ui/use-toast'


export interface ProductInterface {
    _id: string;
    artistId: string;
    artName: string;
    artistName: string;
    image: string;
    description: string;
    price: number;
    category: string;
    available: Boolean;
    reviews: Array<Object>;
    created_at: string;
    updatedAt: string;
    __v: 0;
}
const PaintingDetail = () => {
    const { userId } = useAuth()
    const path = usePathname()
    const artistId: String = path.slice(10,);
    const artquery = useSearchParams();
    const artName = artquery.get("artname")
    const [productDetail, setProductDetail] = useState<ProductInterface>()
    useEffect(() => {
        if (!userId) {
            router.push("/login")
        }
        else
            FetchProductDetail(artistId, artName!, setProductDetail);
    }, [])
    const imgUrl = productDetail?.image ? productDetail?.image : "";
    const router = useRouter();

    const AddToFavourite = async () => {
        const response = await axios.post("/api/checkitem/favourite", {
            artistId,
            artName
        })
        console.log(response)
        if (response.data.message === false) {
            await axios.post("/api/addfav", {
                userId: userId,
                artistId: productDetail?.artistId,
                artName: productDetail?.artName,
                artistName: productDetail?.artistName,
                image: productDetail?.image,
                description: productDetail?.description,
                price: productDetail?.price
            }).then((res) => {
                toast({
                    title: "Product is successfully added to the favourites"
                })
            }).catch((err) => {
                toast({
                    title: "Product is not added to the favourites",
                    description: "Some Error Occured"
                })
            })
        }
        else {
            toast({
                title: "Product is already added to the favourites"
            })
        }
    }


    return (
        <main>
            <header className='dark'>
                <Navbar />
            </header>
            <section>
                <DashboardLayout>
                    <div>
                        <div>
                            <div className="md:flex md:flex-row md:mt-8">
                                <div className=' md:w-1/3'>
                                    {productDetail && productDetail.image ? (
                                        <div>
                                            <Image
                                                src={imgUrl}
                                                alt="product"
                                                height={300}
                                                width={100}
                                                layout="responsive" // Ensures the image scales properly
                                                objectFit="cover" // Ensures the image covers the designated area
                                            />
                                        </div>
                                    ) : (
                                        <div style={{ height: 300, width: 300, backgroundColor: '#e0e0e0' }}>
                                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                        </div>
                                    )}
                                </div>
                                <div className='md:w-2/3 md:p-8'>
                                    <div>
                                        <h1 className='font-sans font-semibold text-2xl my-4 text-gray-900'>
                                            {productDetail && productDetail.artName ?
                                                productDetail.artName :
                                                <div style={{ height: 100, width: 600, backgroundColor: '#e0e0e0' }}>
                                                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                                </div>}
                                        </h1>
                                    </div>
                                    <div className='my-4 text-gray-500'>
                                        <div>
                                            {productDetail && productDetail.description ?
                                                productDetail.description
                                                :
                                                <div style={{ height: 200, width: 600, backgroundColor: '#e0e0e0' }}>
                                                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                                </div>}
                                        </div>
                                    </div>
                                    <div >
                                        {productDetail && productDetail.price ?
                                            <div>
                                                <div className='text-green-700 font-bold md:text-3xl'>
                                                    &#x20B9; {productDetail.price}
                                                </div>
                                                <div className="flex flex-row space-x-4 my-8 md:space-x-6">
                                                    <div>
                                                        <Button onClick={AddToFavourite} className='rounded hover:bg-orange-300  bg-orange-400 border-white ' variant={'outline'}>Add To Favourites</Button>
                                                    </div>
                                                    <div>
                                                        <Button onClick={() => router.push(`/checkout/${productDetail.artName}/${productDetail.artistId}`)} className='rounded hover:bg-purple-300 bg-purple-400 border-white ' variant={'outline'}>Buy Now</Button>
                                                    </div>
                                                </div>
                                                <div className='md:mt-10'>
                                                    <p>
                                                        Artist - <span>
                                                            @ {productDetail.artistName}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            :
                                            <></>
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </DashboardLayout>
            </section>
        </main>
    )
}

export default PaintingDetail