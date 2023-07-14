import mongoose from "mongoose";
const {Schema} = mongoose


const taskSchema = new Schema({
    name:{
        type:String,
        required:[true,"Enter a name for your task"]
    },
    completed:{
        type:String
    }
})

export default mongoose.model("Task",taskSchema)