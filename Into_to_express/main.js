const express=require("express")
const app=express()
const Port=3000
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.send("Welcome to Mohsin's Backend")
})
app.get("/:about",(req,res)=>{
  console.log("PARAMS:", req.params)
    console.log("QUERY:", req.query)
    res.send(`This is the ${req.params.about}  page`)
})
app.get("/about/:slug",(req,res)=>{
    res.send(`This is the About page inside about${req.params.slug}`)
})
app.get("/about/:slug/:slug",(req,res)=>{
    res.send(`This is the About page inside the insde${req.params.slug}`)
})
app.get("/about/:slug/:slug/:kuchb",(req,res)=>{
    res.send(`This is the About page inside the insde${req.params.kuchb}`)

    // console.log(req.query)
})


let t={
    name:"moshin",
    age:22,
    id:238237,
    gmail:"moshin.gmail.com"
}

app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.json(t)
    console.log()
})

app.listen(Port,()=>{
    console.log(`${Port}`)
})
