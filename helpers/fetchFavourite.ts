import axios from "axios";

export default async function FetchFavourite(handlerFunction:Function){
    const response = await axios.get("/api/favitems");
    const data = response.data;
    handlerFunction(data)
}