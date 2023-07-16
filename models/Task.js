import mongoose from "mongoose";
const {Schema} = mongoose


const taskSchema = new Schema({
    name:{
        type:String,
        required:[true,"Enter a name for your task"],
        trim:true
    },
    completed:{
        type:String,
        default:false
    }
})

export default mongoose.model("Task",taskSchema)