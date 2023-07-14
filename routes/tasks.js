import express from 'express'
const router = express.Router();
import { getAllTasks,createTask,getSingleTask,deleteTask,updateTask } from '../controllers/taskControllers.js';


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)



export default router