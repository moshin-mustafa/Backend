// console.log("hello world") 
let name="mohsin"
let age=22
let city="canda"
console.log("my name  is",name)
console.log(`i am ${age} years old`)
console.log("i live in ",city)


    let x = 15;
    let y = 7;
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)



    console.log(typeof window);
console.log(typeof document);
console.log(typeof process);

// const cal= require("./math")
// console.log(cal.add(7,5))
// console.log(cal.sub(7,5))
// const getdata=require("./math")
// console.log(getdata.getname("mohsin"))
// console.log(getdata.getage(22))
// console.log(getdata.getgrade("A"))
// const store=require("./math")
// console.log(store.getproductname("MAC BOOK"))
// console.log(store.getprice(`$ ${1200}`))
// console.log(store.isAvailable())
import{student,studentage,id} from "./math.js"
console.log(student("mohsin"))
console.log(studentage(22))
console.log(id(1234))