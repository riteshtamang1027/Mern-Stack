import express from 'express';
import 'dotenv/config'
const app = express()
app.use(express.json())



app.listen(4000,()=>{
    console.log("This server is running at http://localhost:4000");
})

app.get("/",(req, res)=>{
    res.send("Hello Wrold!")
})