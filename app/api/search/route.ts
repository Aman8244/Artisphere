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
    const { searchString } = data;

    const response = await Product.find({
        $or: [
            { image: { $regex: searchString, $options: 'i' } },
            { artName: { $regex: searchString, $options: 'i' } },
            { artistName: { $regex: searchString, $options: 'i' } },
            { description: { $regex: searchString, $options: 'i' } }
        ]
    })
    return NextResponse.json({
        productArray:response
    })
}