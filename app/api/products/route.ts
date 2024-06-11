import dbConfig from "@/dbConfig/dbConfig";
import { Product } from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const {userId} = getAuth(req);
    if(!userId){
        return NextResponse.json({
            error:"Unauthorised"
        })
    }
    try {
        await dbConfig();
    } catch (error) {
        return NextResponse.json({
            error:error
        })
    }
    const data = await Product.find({})
    return NextResponse.json({
        productItem:data
    })
}