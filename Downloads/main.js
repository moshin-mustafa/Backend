import fs from "fs"
import path from "path"

// console.log(process.cwd())
// console.log("hello")
let dir ="C:\\Users\\mohsi\\OneDrive\\Documents\\html_learning\\Backend\\Downloads"
fs.readdir(dir,(e,d)=>{
    console.log(dir)
    console.log(d)
    for(let i = 0; i<d.length;i++){
        console.log(d[i])
        console.log(path.extname(d[i]))
        if(path.extname(d[i])===".mp4"||path.extname(d[i])===".mkv"){
            let y= path.join(dir,"vedios")
             fs.mkdir(y,()=>{
              let u = path.join(dir,d[i])

let yy =path.join(y,d[i])
                fs.rename(u,yy,()=>{

                })
            })
        }
        else if (path.extname(d[i])===".txt"||path.extname(d[i])===".pdf"){
            let y= path.join(dir,"reading_files")
          

            fs.mkdir(y,()=>{
                let yo= path.join(dir , d[i])
                  console.log(yo)
                let uo= path.join(y,d[i])
                fs.rename(yo,uo,()=>{

                })

            })

        }
        else if (path.extname(d[i])==".png"||path.extname(d[i])==".jpg"){
            let y = path.join(dir , "pitcures")
            fs.mkdir(y,()=>{
                    let yp= path.join(dir,d[i])
                    let op=path.join(y,d[i])
                    fs.rename(yp,op,()=>{
                    
                    })


            })
        }
        else if (path.extname(d[i])==".mp3"||path.extname(d[i])==".wav"){
            let y = path.join(dir , "songs")
            fs.mkdir(y,()=>{
                    let yp= path.join(dir,d[i])
                    let op=path.join(y,d[i])
                    fs.rename(yp,op,()=>{
                    
                    })


            })
        }
    }

})