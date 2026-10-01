    async function m(){
        let y= await fetch("/tt",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json', // Inform the server you are sending JSON
      
            },
            body:JSON.stringify
    (

        {
    
                     id:4,
                    name:"kmran",
                    city:"lahore"
        }        
            
    )
            
        })
        let x=await y.json()
        console.log(x)
    // console.log("m")    
    }

    m()