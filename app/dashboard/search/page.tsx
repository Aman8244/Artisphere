"use client"
import DashboardLayout from '@/components/DashboardLayout'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import ProductCard, { Product } from '@/components/ProductCard';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const Search = () => {
    const { userId } = useAuth();
    const [searchdata, setSearchData] = useState<Product[]>()
    const [searchString, setSearchString] = useState<string | null>("");
    const [state, setState] = useState(0);
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    useEffect(() => {
        if (!userId) {
            router.push("/login")
        }
    }, [])
    const HandleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (searchdata && searchdata[0]) {
            setLoading(false)
        }
        if (state === 1) {
            await axios.post(`/api/search`, {
                image: searchString,
            }).then(res => {
                console.log(res)
                if (res.data?.productArray[0])
                    setSearchData(res.data?.productArray)
                else
                    setSearchData([])
            }).catch(() => {
                setSearchData([])
            })
        }
        else {
            await axios.post(`/api/search`, {
                searchString: searchString,
            }).then(res => {
                console.log(res)
                if (res.data?.productArray[0])
                    setSearchData(res.data?.productArray)
                else
                    setSearchData([])
            }).catch(() => {
                setSearchData([])
            })
        }
        setLoading(false)
        console.log("form submitted")
    }
    const HandleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchData([])
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSearchString(reader.result as string);
            };
            reader.readAsDataURL(file);
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
                            {state === 0 ?
                                <div className='flex justify-center flex-col'>
                                    <form onSubmit={HandleSearch} className="min-w-full md:max-w-md mx-auto">
                                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            <input
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    setSearchString(e.target.value)
                                                    setSearchData([])
                                                }}
                                                value={`${searchString}`}
                                                type="search"
                                                id="default-search"
                                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Search Mockups, Logos..."
                                                required
                                            />
                                            <button
                                                type="submit"
                                                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </form>

                                    <Button className='bg-transparent shadow-white' onClick={() => {
                                        setSearchString("")
                                        setSearchData([])
                                        setState(prev => {
                                            return prev === 0 ? 1 : 0
                                        })

                                    }}>
                                        Search By Image?
                                    </Button>
                                </div>
                                :
                                <div className='flex justify-center flex-col'>
                                    <form onSubmit={HandleSearch} className="max-w-md mx-auto flex flex-row">

                                        <div className="flex flex-col md:flex-row items-center justify-center md:w-full mr-2">
                                            <label
                                                htmlFor="dropzone-file"
                                                className="flex flex-col items-center justify-center md:w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                            >
                                                <div className="flex flex-col items-center justify-center pt-1">
                                                    <svg
                                                        className="w-8 h-8 text-gray-500 dark:text-gray-400"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 20 16"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                        />
                                                    </svg>
                                                    {/* <p className=" text-sm text-gray-500 dark:text-gray-400">
                                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                                    </p> */}
                                                    {/* <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                                                    </p> */}
                                                </div>
                                                <input id="dropzone-file" onChange={HandleImageChange} type="file" className="" />

                                            </label>
                                            <button
                                                type="submit"
                                                className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Search
                                            </button>

                                        </div>
                                    </form>

                                    <Button className='bg-transparent shadow-white' onClick={() => {
                                        setSearchString("")
                                        setSearchData([])
                                        setState(prev => {
                                            return prev === 0 ? 1 : 0
                                        })
                                    }}>
                                        Search By Text?
                                    </Button>
                                </div>
                            }

                        </div>
                        <div className='min-h-[60vh]'>
                            {loading && <div className='flex justify-center  md:min-h-[60vh] items-center'>
                                <img height={200} src='/loading.webp' alt='loading bar' />
                            </div>
                            }
                            {(searchdata && searchdata[0]) ? <div>
                                <ProductCard productArray={searchdata!} />
                            </div> : <div>
                                <div className=''>
                                    <div className={loading ? "hidden" : "visible flex items-center justify-center min-h-[60vh]"}>
                                        No Results Found !!
                                    </div>
                                </div>
                            </div>
                            }


                        </div>
                    </div>
                </DashboardLayout>
            </section>
        </main>
    )
}

export default Search