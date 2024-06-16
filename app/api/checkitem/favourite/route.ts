import { Favourites } from "@/models/Favourites";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const user = getAuth(req);
    if(!user){
        return NextResponse.json({
            error:"Unauthorised"
        })
    }
    const {artistId,artName} = await req.json();

    const response = await Favourites.find({
         artistId:artistId,
         artName:artName
    })
    if(response[0]){
        return NextResponse.json({
            message:true
        })
    }
    return NextResponse.json({
        message:false
    })
}