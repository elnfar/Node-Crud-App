import express from 'express'
const app = express();
import tasks from './routes/tasks.js'
import connectDB from './db/connect.js';
import dotenv from 'dotenv'

dotenv.config()

app.use(express.json());

app.get('/hello',(req,res) => {
    res.send('Nodejs CRUD APP')
})

app.use('/api/v1/tasks',tasks)

const port = 3014;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URL);
      app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
      });
    } catch (error) {
      console.log(error);
    }
  };
start()