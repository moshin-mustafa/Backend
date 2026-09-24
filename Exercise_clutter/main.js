import fs from "fs"
import path from "path"
let dir = "C:\\Users\\mohsi\\OneDrive\\Documents\\html_learning\\Backend\\Exercise_clutter\\Clutter"
fs.readdir(dir,(e,d)=>{
    console.log(d)
    // console.log(e)
    for(let i=0; i<d.length;i++){
        console.log(d[i])
        
    }
    
})