import express from 'express'
import  connectMongoDB  from './src/configuration/db.js';
import 'dotenv/config'
import authRouter from './src/routes/auth_routs.js';

const app = express();
app.use(express.json())


// mongoDB Connection
connectMongoDB()

app.get("/",(req , res)=>{
    res.send("Hello World!")
})

app.use("/api/auth",authRouter)

//Listning port
app.listen(4000,()=>{
    console.log("Server is running at http://localhost:4000")
})


