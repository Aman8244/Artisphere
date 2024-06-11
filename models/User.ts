import mongoose from "mongoose";
import { ProductSchema } from "./Product";

const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    orders:{
        type:[ProductSchema]
    },
    userId:{
        type:String
    }
})

export const User = mongoose.models.user || mongoose.model("user",UserSchema);
