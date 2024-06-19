"use client"
import { ProductInterface } from '@/app/painting/[...id]/page'
import Navbar from '@/components/Navbar'
import FetchProductDetail from '@/helpers/fetchProductDetail'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'

const CheckoutPage = () => {
  const queryparams = useParams();
  const { art } = queryparams;
  const artName = art[0].replaceAll("%20", " ");
  const artistId = art[1];
  const [checkoutItem, setCheckoutItem] = useState<ProductInterface>()
  // console.log(artName,artistId)
  useEffect(() => {
    FetchProductDetail(artistId, artName, setCheckoutItem)
  }, [])

  return (
    <main>
      <header className='dark'>
        <Navbar />
      </header>
      <section>
        <div>
          <div>
            <div className='flex my-2 justify-center items-center'>
              <h1 className='md:text-4xl font-semibold'>
                Checkout
              </h1>
            </div>
            <div className="flex my-6 justify-center items-center">
              <div className='w-5/6'>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Thumbnail</TableHead>
                      <TableHead>Art Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead className="text-center">Go To Product</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        <img className='m-auto' height={50} width={50} src={`${checkoutItem?.image}`} alt='product-thumbnail' />
                      </TableCell>
                      <TableCell>
                        {checkoutItem?.artName}
                      </TableCell>
                      <TableCell>
                        &#x20B9; {checkoutItem?.price}
                      </TableCell>
                      <TableCell>
                        <Link href={`/painting/${checkoutItem?.artistId}?artname=${checkoutItem?.artName}`}>
                          <img className='m-auto' width="32" height="32" src="https://img.icons8.com/windows/32/external-link-squared.png" alt="external-link-squared" />
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

              </div>

            </div>
            <div className='flex justify-center'>
              <div className='w-5/6'>
                <Button className='bg-purple-500 hover:bg-purple-300 w-full rounded-2xl text-white hover:text-black'>
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CheckoutPage