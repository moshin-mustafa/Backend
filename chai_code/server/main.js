import express from 'express'
const app= express()
let port= 3000
app.get(`/`,(req,res)=>{
    res.send("ready")
})
app.listen(port,()=>{
    console.log("server running")
})