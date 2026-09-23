import express from 'express'
import fs from 'fs'
import mypage from './routes/mypage.js'
// const mypage=require(`./routes/mypage`)
const app= express()
app.use(`/mypage`,mypage)
let port= 3000
app.use((req,res,next)=>{
    fs.appendFileSync("logs",`${Date.now()} is a ${req.method}`)
    console.log("logged in")
    console.log(`${Date.now()} is a ${req.method}`)
    req.inc=" i am the added text" // text add kr sakty hain send krty how basiclly req bejy ga aur wo cheez add ho jay gi
next()
})
app.use((req,res,next)=>{
    console.log("logged in")

next()
})
app.get(`/`,(req,res)=>{
    res.send("hello")    
})
app.get(`/about`,(req,res)=>{
    res.send("hello,my mohsin hooon"+ req.inc)    
})

app.use(express.static('public'));

app.listen(port,()=>{
console.log("port is working on server 3000")
})
// app.listen(port,()=>
// {
//     console.log(`the server is working on ${port}`)
// })