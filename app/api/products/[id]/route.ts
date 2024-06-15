import dbConfig from "@/dbConfig/dbConfig";
import { Product } from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import {  NextRequest, NextResponse } from "next/server";
export async function POST(req:NextRequest){
    const {userId} = getAuth(req);
    if(!userId){
        return NextResponse.json({
            error:"Unauthorised"
        })
    }
    await dbConfig();
    let dbFind;
    const queryData = await req.json()
    const id = queryData.id
    const artName = queryData.artName
    console.log(id,artName)
    dbFind = await Product.findOne({
        artistId:id,
        artName:artName
    })

    
    const data = dbFind
    console.log(data)
    return NextResponse.json({
        data:data
    })
}