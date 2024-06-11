import mongoose from "mongoose";
import { ProductSchema } from "./Product";

const FavouritesSchema = new mongoose.Schema({
    userId:String,
    items:[ProductSchema],
})

export const Favourites = mongoose.models.favourite || mongoose.model("favourite",FavouritesSchema);
