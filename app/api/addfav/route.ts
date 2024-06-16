import { Favourites } from "@/models/Favourites";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const user = getAuth(req)
    if (!user) {
        return NextResponse.json({
            error: "Unauthorised"
        })
    }
    try {
        const { userId, ...productDetail } = await req.json()
        console.log(productDetail)
        const favProduct = new Favourites({
            userId,
            artistId: productDetail.artistId,
            artName: productDetail.artName,
            artistName: productDetail.artistName,
            image: productDetail.image,
            description: productDetail.description,
            price: productDetail.price
        })
        await favProduct.save();

    } catch (error) {
        return NextResponse.json({
            message: "Product not added to favourites"
        })
    }
    return NextResponse.json({
        message: "Product added to favourites"
    })
}