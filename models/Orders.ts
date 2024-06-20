import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    artistId:{
        type:String,
        required:true
    },
    artName:{
        type:String,
        required:true
    },
    artistName:{
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})
export const Orders = mongoose.models.order || mongoose.model("order",OrderSchema);
