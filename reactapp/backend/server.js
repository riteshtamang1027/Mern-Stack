import express from 'express'

const app = express()

app.use(express.json())







app.listen(4001,()=>{
    console.log("Server is running at http://localhost:4001")
})


app.get("/",(req, res)=>{
    res.send("This is login backend Server!")
})