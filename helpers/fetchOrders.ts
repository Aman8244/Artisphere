import axios from "axios";

export default async function FetchOrders(handlerFunction: Function) {
    await axios.get("/api/orders").then(res => {
        handlerFunction(res.data)
    })
}