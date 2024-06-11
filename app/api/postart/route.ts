import dbConfig from "@/dbConfig/dbConfig";
import { Product } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
    const { userId } = getAuth(req);

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" });
    }
    try {
        await dbConfig();
    } catch (error) {
        console.log("DB not connected ", error)
        return NextResponse.json({
            message: "DB is not connected "
        })
    }
    const data = await req.json();
    const temp = new Product({
        artistId:data?.artistId,
        artistName:data?.artistName,
        image:data?.image,
        description:data?.description,
        category:data?.category
    })
    await temp.save();

    console.log(data)
    return NextResponse.json({
        message: "Product Posted Successfully"
    })
}