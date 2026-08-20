const express= require("express")
const app = express()
const port = 3000
app.use(express.static('public'));
let x = {
    "name": "Mohsin",
    "age": 22
}
app.get('/',(res,req)=>{
    req.send("hello world")
})
app.get('/user',(res,req)=>{

    req.send("these are the users") 
    
})
app.post('/user',(res,req)=>{
    // return "These are the  "
    req.send("user recevied")
    console.log("hello i am a post")
    // console.log(req.x);
    // app.use(express.json())
    // console.log(app.x)
// console.log()

})
app.listen(port,()=>{
    console.log(`running at ${port} `)

})