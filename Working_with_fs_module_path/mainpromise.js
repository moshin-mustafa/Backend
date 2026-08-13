//  import fs  from "fs/promises"
// let x= await fs.appendFile("test.txt","\n hello i am from promise ")

// import { readFile } from 'node:fs/promises'; 
import fs from "fs/promises"
console.log("program started")
let x= await fs.writeFile("test.txt","Hello from Node.js")

console.log("files created")
let y= await fs.appendFile("test.txt","\nI am learning the fs module")
console.log("first message added")
let z= await fs.appendFile("test.txt","\nThis is my second exercise")
console.log("Second message added")
console.log("reading files")


    // console.log(fs.readFile("test.txt"))
    try {
        
        let x =fs.readFile("test.txt")
        let y = await x
        console.log(y.toString())
    } catch (error) {
        console.log
    }


console.log("program ended")
