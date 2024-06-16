import mongoose from "mongoose";

const FavouritesSchema = new mongoose.Schema({
    userId:String,
    artistId:String,
    artName:String,
    artistName:String,
    image: String,
    description: String,
    price: Number,
    category:String,
})

export const Favourites = mongoose.models.favouriteart || mongoose.model("favouriteart",FavouritesSchema);
