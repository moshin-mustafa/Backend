const express = require('express');
const router = express.Router();

const path = require("path");
const { json } = require('stream/consumers');
// define the home page route
// let x=["Ali",
//     "Ahmed",
//     "Sara"]
let x =


   [
      { name: "ali", age: 21, city: "RWP", id:1 },
      { name: "ahmed", age: 32, city: "isl",id:2 },
   { name: "sara", age: 22, city: "quetta",id:3 }
   

   ]
router.get('/', (req, res) => {
   res.send(x);
   console.log(req.query)
});
router.get('/search', (req, res) => {
   let found=false


   for (let i = 0; i < x.length; i++) {
      
      if (x[i].city == req.query.city && x[i].age==req.query.age) {
found = true 
console.log(x[i].name)

   console.log(x[i])
   res.json(x[i]);
      }

   }
      if (found== false) {



   console.log("invalid")
   res.json("invalid");
      }




});

router.get(`/:id`,(req,res)=>{
   let found=false
for(let i = 0 ;i<x.length; i++){
   if (x[i].id==req.params.id){
found = true
      res.send(x[i])
      console.log(req.params.id)
      console.log(x[i])
   }
}
if (found == false) {
res.send("invalid")
console.log("invlaid")
}
// console.log(req.params.id[x])
})
router.get(`/`,(req,res)=>{
   // console.log(req.body)
// res.send(`public/index.html`,{root:__dirname})
// res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// res.send(req.body)

})
router.post(`/`,(req,res)=>{
   console.log(req.body)

   // let y=(toString(req.body))
// console.log(y)
console.log(req.body.name)
let y= req.body


   let student={ 
      name:y.name,
      city:y.city,
      age:y.age,
   id:x.length+1  
   }
   // student.push(y.age,y)
   x.push(student)
// console.log(t)
//    console.log(y)
   
// res.send(`public/script.js`,{root:__dirname})
res.send(student)
// res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// res.send(req.body)

})
router.delete(`/:id`,(req,res)=>{
   // console.log(req.params.id)
   let found= false
   for(let i = 0;i<x.length;i++){
if(x[i].id==req.params.id){
   found = true
   x.splice(i,1)
   res.send("deleted succesfully")
   break
}
   }

      if(found == false ){

         res.send("invalid")
   console.log("invlaid")
      }
      

})

module.exports = router;