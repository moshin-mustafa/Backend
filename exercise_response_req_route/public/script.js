
  async function pp() {
  let e = await fetch("/users",{
    method:"POST",

    headers:{"Content-Type": "application/json"
      } ,
            body:JSON.stringify({
          name:"ali"
          ,
          city:"faislabad"

          ,
          age:23,
        
      })
  })
  let y = await e.text()
  //  console.log(y)  
  }
  pp()