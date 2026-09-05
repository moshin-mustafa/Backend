const express= require("express")

const app = express()
const student = require('./routes/student');
app.use(express.json());
app.use(express.static("public"))
// app.use(express.static("routes"))

app.use('/users', student);
const port = 3000

app.get(`/`, (req,res)=>{
res.send("hello im  at local host 300")

})
// app.get(`/`,(req,res)=>{
// res.sendFile(`public/index.html`,{root:__dirname})
// })

// app.post(`/`,(req,res)=>{
//       console.log(req.body)
// res.sendFile(`public/index.html`,{root:__dirname})
// })
app.listen(port,()=>
{
    console.log(`the server is working on ${port}`)
})