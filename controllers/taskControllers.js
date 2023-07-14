import Task from "../models/Task.js"



const getAllTasks = (req,res) => {
    res.send('All items from the file')
} 
const createTask = async (req,res) => {

    const task = await Task.create(req.body)
    res.status(201).json({task})
} 
const getSingleTask = (req,res) => {
    res.send('GST')
} 

const updateTask = (req,res) => {
    res.send('UT')
} 

const deleteTask = (req,res) => {
    res.send('DT')
} 



export {
    getAllTasks,
    getSingleTask,
    deleteTask,
    updateTask,
    createTask
}