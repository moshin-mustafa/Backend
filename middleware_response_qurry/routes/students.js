import express from 'express'
import { students } from "../studentdata.js";
const router = express.Router()

router.use( '/students',(req, res ,next) => {
        let found = false
        let i =0
        for( i = 0 ;i <students.length;i++){


            if(req.query.city == students[i].city || req.query.id==students[i].id){
                req.students=students[i]
                found=true
                console.log(req.query)
                next()
                break;
            }
                // res.send(students);
            }
            if (found==false){
               console.log("invalid qurry")
               
               res.send("inclaid qurry")
            
            }
        
    });

    router.get('/students',(req,res)=>{
    
        res.json(req.students)
    })
    export default router