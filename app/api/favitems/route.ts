import { Favourites } from "@/models/Favourites";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const {userId} = getAuth(req);
    if(!userId){
        return NextResponse.json({
            error:"Unauthorised"
        })
    }
    const queryData = await Favourites.find({
        userId:userId
    })
    return NextResponse.json({
        favItems:queryData
    })
}