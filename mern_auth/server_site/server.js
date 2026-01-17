import express from 'express'
import  connectMongoDB  from './src/configuration/db.js';
import 'dotenv/config'

const app = express();
app.use(express.json())


// mongoDB Connection
connectMongoDB()

//Listning port
app.listen(4000,()=>{
    console.log("Server is running at http://localhost:4000")
})

app.get("/",(req , res)=>{
    res.send("Hello World!")
})