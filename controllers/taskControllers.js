

const getAllTasks = (req,res) => {
    res.send('All items from the file')
} 
const createTask = (req,res) => {
    res.send('CT')
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