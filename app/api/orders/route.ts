import { Orders } from "@/models/Orders";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const {userId} = getAuth(req);
    if(!userId){
        return NextResponse.json({
              error:"Unauthorised"
        })
    }
    const response = await Orders.find({userId:userId});
    return NextResponse.json({
        orderItem:response
    })
}
export async function POST(req:NextRequest) {
    const {userId} = getAuth(req);
    if(!userId){
        return NextResponse.json({
              error:"Unauthorised"
        })
    }
    const data = await req.json()
    const temp = new Orders({
        userId:userId,
        ...data
    })
    await temp.save();
    return NextResponse.json({
        message:"success"
    })
}