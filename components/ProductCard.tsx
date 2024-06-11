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
interface Product {
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
    return (
        <div>
            <div className='md:flex md:flex-row'>
                {productArray.map((item) => {
                    return <Card>
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
                                <p>
                                    {item?.price?.toString()}
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