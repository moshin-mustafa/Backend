import express from 'express'
const app= express()
let port= 3000
app.get(`/`,(req,res)=>{
    res.send("hello")    
})
app.get(`/about`,(req,res)=>{
    res.send("hello,my mohsin hooon")    
})

app.use(express.static('public'));

app.listen(port,()=>{
console.log("port is working on server 3000")
})
// app.listen(port,()=>
// {
//     console.log(`the server is working on ${port}`)
// })