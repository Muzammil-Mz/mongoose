import express from "express"
import config from "config"


import "./utils/dbConnect.js"
import userRouter from "./controllers/users/index.js"
const app=express()
const port=config.get("PORT")

app.use(express.json())

app.get("/api",(req,res)=>{
    try {
        res.status(200).json({msg:"Hello world"})
    } catch (error) {
        console.log(error);
    }
})

app.use("/api/users",userRouter)


app.listen(port,()=>{
    console.log(`Server is up and running at ${port}`);
})
 