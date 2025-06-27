import mongoose from "mongoose";

const DATABASE_URI = "mongodb+srv://theirfanullah:irshakhan@cluster0.mu8eh0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

export default async function connectDatabase() {
let connect = await mongoose.connect(DATABASE_URI)
console.log(connect);
}