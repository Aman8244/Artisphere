import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface Product {
    _id: String,
    artistId: String,
    artName: String,
    artistName: String,
    image: String,
    description: String,
    price: Number,
    category: String,
    available: Boolean,
    reviews: [{
        name: String,
        message: String,
        commentId: String
    }]
}

interface ProductCardProps {
    productArray: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ productArray }) => {
    const router = useRouter();

    return (
        <div>
            <div className='md:flex md:flex-row'>
                {productArray.map((item, key) => {
                    return <Card key={key} className='mx-1' onClick={() => {
                        router.push(`/painting/${item.artistId}?artname=${item.artName}`)
                    }}>
                        <CardHeader>
                            <Image src={item.image.toString()} alt='product' height={400} width={200} />
                        </CardHeader>
                        <CardContent>
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
    )
}

export default ProductCard