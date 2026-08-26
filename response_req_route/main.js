// const express= require("express")
// const app = express()
// const port = 3000
// app.use(express.json())
//     app.use(express.static('public'));
//     let x = {
//         "name": "Mohsin",
//         "age": 22
//     }

//     app.get('/',(req,res)=>{
//         res.send("hello world")
//     })
//     app.get('/user',(req,res)=>{
//    res.send(x)

// })
// app.post('/user',(req,res)=>{
//     // return "These are the  "
//     res.send("new user found")
//     console.log(req.body);
//     console.log("user recived")

// // console.log()

// })
// app.listen(port,()=>{
//     console.log(`running at ${port} `)

// })


const express = require("express")
const path = require("path")
const app = express()
const port = 3000
let myobj = {
    name: "Mohsin",
    age: 22,
    city: "quetta"
}

app.use(express.json())

app.get(`/`, (req, res) => {
    res.send("welcome to the Registration API")
    
})
app.get(`/user`, (req, res) => {
    res.send(myobj)
    
})
app.get(`/users`,(req,res)=>{
    
    // res.send("sending users")
    // console.log(myobj)
    res.sendFile(path.join(__dirname, "public", "index.html"))
})
app.post(`/users`,(req,res)=>{
    console.log(req.body)
    console.log("user recived")
    res.send("new user hs benn added ")
})
app.use(express.static('public'));
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})


// const express = require("express")
// const path = require("path")

// const app = express()
// const port = 3000

// let myobj = {
//     name: "Mohsin",
//     age: 22,
//     city: "quetta"
// }

// app.use(express.json())

// // First page
// app.get("/", (req, res) => {
//     res.send("welcome to the Registration API")
// })

// // When /users is visited, send the HTML page
// app.get("/users", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"))
// })

// // POST /users
// app.post("/users", (req, res) => {
//     console.log(req.body)
//     console.log("user received")

//     res.send("new user has been added")
// })

// // Make script.js available
// app.use(express.static("public"))

// app.listen(port, () => {
//     console.log(`server running on ${port}`)
// })