import express from 'express'

const app = express();
app.use(express.json())




//Listning port
app.listen(4000,()=>{
    console.log("Server is running at http://localhost:4000")
})

app.get("/",(req , res)=>{
    res.send("Hello World!")
})