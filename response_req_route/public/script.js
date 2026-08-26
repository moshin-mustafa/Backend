// async function tpost() {
// let y= await fetch("/user",{method:"POST",    
//     headers:{
//         "Content-Type": "application/json"

//     },
// body:JSON.stringify({
// username:"mohsin",
// age:22
// }
// )

// })
//     let yy= await y.text()
//     console.log(yy)
// }
// tpost()


async function myfub() {
    let myf= await fetch("/users",{method:"POST",
    headers:{
        "Content-Type": "application/json"
    
    },
    body:JSON.stringify({
        name:"mohsin"
,age:22,
city:"quetta"
    })
    })
    let bb= await myf.text()
    console.log(bb)
}
myfub()