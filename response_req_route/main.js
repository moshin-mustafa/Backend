const express= require("express")
const app = express()
const port = 3000
app.use(express.json())
    app.use(express.static('public'));
    let x = {
        "name": "Mohsin",
        "age": 22
    }

    app.get('/',(req,res)=>{
        res.send("hello world")
    })
    app.get('/user',(req,res)=>{
   res.send(x)
    
})
app.post('/user',(req,res)=>{
    // return "These are the  "
    res.send("new user found")
    console.log(req.body);
    console.log("user recived")
  
// console.log()

})
app.listen(port,()=>{
    console.log(`running at ${port} `)

})