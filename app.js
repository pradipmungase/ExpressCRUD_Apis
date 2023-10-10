import express from 'express';
import connectDB from './DB/connection.js';
import router from './routes/web.js';


const app = express()
const port = 3000

// T get req.body 
app.use(express.json()); // for parsing application/json


//load db
connectDB()

// load routes
app.use('/',router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})