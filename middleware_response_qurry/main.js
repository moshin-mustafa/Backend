import express from "express"
import student from "./routes/students.js"

const app = express();

 app.use('/student',student)

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
  res.send(students);
});
// app.get('/tt', (req, res) => {
//     // res.send(students);
// });
app.use(express.json());
app.use(express.static('public'));
app.get('/tt', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});


 app.post('/tt',(req,res)=>{
     
// console.log(req.body)
    let y= req.body
        // res.json(req.students)
       let   stu={
                    id:y.id,
                    name:y.name,
                    city:y.city
        }
        students.push(stu)
        res.send(stu)
        console.log(stu)
    // res.sendFile(`public/index.html`,{root:__dirname})
    })
    


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});