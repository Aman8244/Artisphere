import mongoose from "mongoose";

const dbConfig = async () => {
    try {
        mongoose.connect(process.env.mongo_url!);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("Database Connected Successfully!")
        })

        connection.on("error", () => {
            console.log("Database is not connected error occured!")
        })
    } catch (error) {
        console.log("Error Occured in db :", error)
    }
}
export default dbConfig;