import express from "express"


const app = express()
let port = 3000

let mf = function (req,res,next) {
    console.log("Logged in")
    next()
    
}
app.use((req,res,next)=>{
    console.log(req.method)
    console.log(req.path)
    next()
})
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use(mf)// jasy e user about section ma jay ga ooged in ho jay ga
app.get('/about',(req,res)=>{
    res.send("i am about")
})
app.use('/users',(req,res,next)=>{
    res.send("i am here for users")
    next()
    console.log("users got")
})
app.listen(port,()=>{

})

