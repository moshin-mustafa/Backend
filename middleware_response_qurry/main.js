import express from "express"

const app = express();
const port = 3000;
let students=[{
    id:1,
name:"mohsin",
city:"quetta"

},
{
        id:2,
name:"Ali",
city:"rwp"

},  {
    
    id:3,
    name:"lizo",
    city:"sgd"
}  
]
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use( (req, res ,next) => {
        let found = false
        let i =0
        for( i = 0 ;i <students.length;i++){


            if(req.query.city == students[i].city){
                req.students=students[i]
                found=true
                console.log(req.query)
                next()
                break
                
            }
                // res.send(students);
            }
            if (found==false){
               console.log("invalid qurry")
            //    res.send("inclaid qurry")
            
            }
        
    });

app.get('/students',(req,res)=>{

    res.json(req.students)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});