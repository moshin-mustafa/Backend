async function tpost() {
let y= await fetch("/user",{method:"POST"})
    let yy= await y.text()
    console.log(yy)
}
tpost()