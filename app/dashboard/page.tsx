"use client"
import DashboardLayout from '@/components/DashboardLayout'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import axios from "axios"
import FetchProducts from '@/helpers/fetchProducts'
import ProductCard from '@/components/ProductCard'
import { useToast } from "@/components/ui/use-toast"


const Dashboard = () => {
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
    FetchProducts(setProducts);
  }, [])
  const paintingCategories: String[] = [
    "Abstract",
    "Abstract Expressionism",
    "Academic Art",
    "Aestheticism",
    "Art Deco",
    "Art Nouveau",
    "Baroque",
    "Bauhaus",
    "Byzantine",
    "Classical",
    "Conceptual Art",
    "Constructivism",
    "Cubism",
    "Dada",
    "Digital Art",
    "Expressionism",
    "Fauvism",
    "Futurism",
    "Geometric Abstraction",
    "Gothic Art",
    "Graffiti Art",
    "Hyperrealism",
    "Impressionism",
    "Installation Art",
    "Land Art",
    "Mannerism",
    "Minimalism",
    "Modernism",
    "Naive Art",
    "Neo-Classicism",
    "Neo-Expressionism",
    "Op Art",
    "Performance Art",
    "Photorealism",
    "Pop Art",
    "Post-Impressionism",
    "Precisionism",
    "Pre-Raphaelite",
    "Realism",
    "Renaissance",
    "Rococo",
    "Romanticism",
    "Street Art",
    "Surrealism",
    "Symbolism"
  ];
  console.log(products)
  const [formData, setFormData] = useState({
    artistName: "",
    artistId: user?.id,
    description: "",
    price: "",
    category: "",
    artName: ""
  })
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const PostNewArt = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/api/postart", {
      artistId: formData.artistId,
      artistName: formData.artistName,
      category: formData.category,
      image: image,
      description: formData.description,
      price: parseInt(formData.price),
      artName: formData.artName
    }).then(res => {
      toast({
        title: "Success",
        description: "Successfully Added The Product"
      })
      setFormData({
        artistName: "",
        artistId: user?.id,
        description: "",
        price: "",
        category: "",
        artName: ""
      })
      setImage("")
      console.log(res)
    }).catch((err) => {
      toast({
        title: "Error Occured ",
        description: "Please Try Again ",
        variant: "destructive"
      })
      console.log(err)
    })
    console.log("Form Submitted")

  }


  return (
    <main>
      <header className='dark'>
        <Navbar />
      </header>
      <section>
        <div>
          {/* <div className="sm:flex sm:flex-row">
            <div className='flex flex-col '>
              <div className='sm:py-10 sm:px-5 border border-black'>
                <Link href={"/dashboard"}>
                  Home
                </Link>
              </div>
              <div className='sm:py-10 sm:px-5 border border-black'>
                <Link href={"/dashboard"}>
                  Gallery
                </Link>
              </div>
              <div className='sm:py-10 sm:px-5 border border-black'>
                <Link href={"/dashboard"}>
                  Favourites
                </Link>
              </div>
              <div className='sm:py-10 sm:px-5 border border-black'>
                <Link href={"/dashboard"}>
                  Orders
                </Link>
              </div>
            </div>
          </div> */}
          <DashboardLayout>
            <div>
              <div className='sm:flex sm:flex-row'>
                <div className='sm:w-11/12'>
                  <h1 className="text-2xl font-bold">
                    Hello! {user?.fullName}
                  </h1>
                </div>
                <div>
                  <Sheet>
                    <SheetTrigger>
                      <div className='p-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90'>Add
                        <img width="20" className='ml-2' height="20" src="https://img.icons8.com/nolan/64/plus-math.png" alt="plus-math" />
                      </div>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Sell Your Art</SheetTitle>
                        <SheetDescription>
                          <form onSubmit={PostNewArt}>
                            <Label htmlFor="name">Name</Label>
                            <Input onChange={(e) => {
                              setFormData((prev) => {
                                return {
                                  ...prev,
                                  artistName: e.target.value
                                }
                              })
                            }} value={formData.artistName} required id="name" type="text" placeholder='Enter Your Name' /><br />
                            <Label htmlFor="artname">Art Name</Label>
                            <Input onChange={(e) => {
                              setFormData((prev) => {
                                return {
                                  ...prev,
                                  artName: e.target.value
                                }
                              })
                            }} value={formData.artName} required id="artname" type="text" placeholder='Enter Art Name' /><br />
                            <Label htmlFor="desc">Description</Label>
                            <Textarea onChange={(e) => {
                              setFormData((prev) => {
                                return {
                                  ...prev,
                                  description: e.target.value
                                }
                              })
                            }} value={formData.description} required id='desc' placeholder='Details about the art' /><br />
                            <Label htmlFor="picture">Picture</Label>
                            <Input onChange={handleImageChange} required id="picture" type="file" /><br />
                            <Label htmlFor="name">Price</Label>
                            <Input onChange={(e) => {
                              setFormData((prev) => {
                                return {
                                  ...prev,
                                  price: e.target.value
                                }
                              })
                            }} value={formData.price} required id="name" type="text" placeholder='Enter price in rupees ' /><br />
                            <Label>Category</Label>
                            <Select onValueChange={(val) => {
                              setFormData((prev) => {
                                return {
                                  ...prev,
                                  category: val
                                }
                              })
                            }} value={formData.category} required>
                              <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Select paint category" />
                              </SelectTrigger>
                              <SelectContent className='bg-white'>
                                <SelectGroup>
                                  <SelectLabel>Category</SelectLabel>
                                  {paintingCategories.map((el, key) => {
                                    return <SelectItem key={key} value={`${el}`}>{el}</SelectItem>
                                  })}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                            <br />
                            <Button type='submit'>
                              Add
                            </Button>
                          </form>
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>

                </div>
              </div>
              <section >
                <div>
                  <div>
                    <ProductCard productArray={products} />
                  </div>

                </div>
              </section>
            </div>
          </DashboardLayout>
        </div>
      </section>
    </main>
  )
}

export default Dashboard