const fs = require("fs")
// console.log(fs)
console.log("start")

fs.writeFile("test.txt","hello my name is mohsin i am writing my fs file ",()=>{
fs.readFile("test.txt",(e,d)=>{
    console.log(e,d.toString())
})
})
console.log("ending")
fs.appendFile("test.txt","\nto select btwn write file and write file sync we will always select write file beacuse we want our program to continue rather then get stopped while file is being written",(e,d)=>{
console.log(d)
})

// ex solved:1
// const fs= require("fs")
// console.log("start")
// fs.writeFile("test.txt","hello i am mohsin",(c,d)=>{
//  if (c==true){
//     console.log(c)
//  }
//      console.log("file written")
//         fs.readFile("test.txt",(c,d)=>{
//             if (c==true){
//                 console.log(c)
//             }
//             fs.appendFile("test.txt","\nhello",(c,d)=>{
//                 fs.readFile("test.txt",(c,d)=>{

//                     if(c==true){
//                         console.log(c)
//                     }
//                     console.log("file appended")

//                     console.log(d.toString())
//                 })
//             })
            

//         })
 
// })
// console.log("end")

//  ex:2
// console.log("Program started")

// fs.writeFile("test.txt", "Hello from Node.js", (c, d) => {

//     if (c) {
//         console.log(c)
//         return
//     }

//     console.log("file created")

//     fs.appendFile("test.txt", "\nI am learning the fs module", (c, d) => {

//         if (c) {
//             console.log(c)
//             return
//         }

//         console.log("first message added")

//         fs.appendFile("test.txt", "\nThis is my second exercise", (c, d) => {

//             if (c) {
//                 console.log(c)
//                 return
//             }

//             console.log("second message was added")
//             console.log("reading files")

//             fs.readFile("test.txt", (c, d) => {

//                 if (c) {
//                     console.log(c)
//                     return
//                 }

//                 console.log(d.toString())
//             })
//         })
//     })
// })