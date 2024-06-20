import { Product } from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const { userId } = getAuth(req);
    if (!userId) {
        return NextResponse.json({
            error: "Unauthorised"
        })
    }
    const data = await req.json();
    const { searchString, image } = data;
    let response
    if (image) {
        response = await Product.find({
            image: image
        })
    }
    else {
        response = await Product.find({
            $or: [
                { artName: { $regex: searchString, $options: 'i' } },
                { artistName: { $regex: searchString, $options: 'i' } },
                { description: { $regex: searchString, $options: 'i' } }
            ]
        })
    }
    return NextResponse.json({
        productArray: response
    })
}