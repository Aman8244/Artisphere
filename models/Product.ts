import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    artistId:String,
    artistName:String,
    image: String,
    description: String,
    price: Number,
    category:String,
    available: {
        type:Boolean,
        default:true
    },
    reviews: {
        type:[{
            name: String,
            message: String,
            commentId: String
        }],
        default:[]
    },
},{
    timestamps:{
        createdAt: 'created_at'
      }
})

export const Product = mongoose.models.artproduct || mongoose.model("artproduct",ProductSchema);
