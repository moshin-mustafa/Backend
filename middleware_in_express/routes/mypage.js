import express from 'express'
const router = express.Router()
router.use((req,res,next)=>{
    console.log("logged in")

next()
})
router.get('/',(req,res)=>{
    res.send("hello i am from routes")
})

// module.exports=router
export default router