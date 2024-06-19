import { Favourites } from "@/models/Favourites";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const {userId} = getAuth(req);
    if(!userId){
        return NextResponse.json({
            error:"Unauthorised"
        })
    }

    const reqbody = await req.json()
    await Favourites.deleteOne({
        userId:reqbody.userId,
        artName:reqbody.artName
    }) 
    return NextResponse.json({
        message:"Success"
    })
}