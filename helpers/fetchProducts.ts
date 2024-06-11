import axios from "axios"

export default async function FetchProducts (handlerfunction:Function){
    const req = await axios.get("/api/products")
    const data = await req.data
    handlerfunction(data?.productItem)
}