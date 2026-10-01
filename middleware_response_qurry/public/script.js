
    let k = document.body.getElementsByClassName("id")
    console.log(k)
    for(let i = 0; i<k.length;i++){
// console.log(k[i])
k[i].addEventListener("click",()=>{
    // console.log(event.target)
    let p ="http://127.0.0.1:3000/student/students?id="+event.target.textContent
    async function ff() {
        
        
        
        let u = await fetch(p)
        let o= await u.json()
        window.location.href=p
        console.log(o)
        // window.location(o)
    //     // const n= new URLSearchParams(window.location)
    // console.log(n)
    // catch{
    //     console.error(Error);
        
    // }
    }
ff()
    //
    console.log(p)  

})
    }