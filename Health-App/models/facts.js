import mongoose from "mongoose";

let Facts = mongoose.Schema({
    "statment": String,
    "price": Number,
    "access": Number
})


export default mongoose.model("Facts", Facts);