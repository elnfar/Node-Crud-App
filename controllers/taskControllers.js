import Task from "../models/Task.js"



const getAllTasks = async(req,res) => {
    try {

        const allTasks =  await Task.find({})
        res.status(200).json({allTasks})

    }catch(error) {
        res.status(500).json({error})
    }
} 
const createTask = async (req,res) => {

    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(error) {
        res.status(500).json({msg:error.message})
    }
} 
const getSingleTask = async(req,res) => {
    try {

        const {id:taskID} = req.params

        const task = await Task.findOne({_id:taskID})
        res.status(200).json({task})

        if(!task) {
            return res.status(404).json({msg:'To task found!'})
        }

 

    }catch(error) {
        res.status(500).json({msg:error.message})
    }
} 

const updateTask = async(req,res) => {
    try {
        const {id:taskID} = req.params;

        const task = await Task.findOneAndUpdate({
            _id:taskID
        },req.body, {
            new:true, runValidators:true
        })


        if(!task) {
            return res.status(404).json({msg:'To task found!'})
        }

        res.status(200).json({task})

    }catch(error) {
        res.status(500).json({msg:error.message})
    }
} 

const deleteTask = async(req,res) => {
    try {

        const {id:taskID} = req.params

        const task = await Task.findOneAndDelete({_id:taskID})
        res.status(200).json({task})

        if(!task) {
            return res.status(404).json({msg:'To task found!'})
        }

 

    }catch(error) {
        res.status(500).json({msg:error.message})
    }
} 



export {
    getAllTasks,
    getSingleTask,
    deleteTask,
    updateTask,
    createTask
}