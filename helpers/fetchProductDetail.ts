import axios from "axios";

export default async function FetchProductDetail (artistId:String,artName:String,handlerfunction:Function){
    const res = await axios.post(`/api/products/${artistId}`,{
        id:artistId,
        artName:artName
    });
    const data = res.data;
    handlerfunction(data.data);
}