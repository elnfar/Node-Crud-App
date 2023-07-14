import express from 'express'
const app = express();

//my routes
app.get('/hello',(req,res) => {
    res.send('Nodejs CRUD APP')
})

const port = 3014;

app.listen(port, console.log(`running on ${port}`))