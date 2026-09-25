import fs from "fs"
import path from "path"
let dir = "C:\\Users\\mohsi\\OneDrive\\Documents\\html_learning\\Backend\\Exercise_clutter\\Clutter"
console.log(dir)
fs.readdir(dir, (e, d) => {
    console.log(d)

    for (let i = 0; i < d.length; i++) {


        if (path.extname(d[i]) === ".mp4"||path.extname(d[i])===".mkv") {

            let y = path.join(dir, "Videos")
            fs.mkdir(y, () => {
                let u = path.join(dir, d[i])
                let k= path.join(y,path.join(d[i]))
                fs.rename(u,k,() => {
                    
                 
                 })
            })
    
        }
        else if(path.extname(d[i])===".jpg"||path.extname(d[i])===".png"){
    let y = path.join(dir, "photos")
            fs.mkdir(y, () => {
                let u = path.join(dir, d[i])
                let k= path.join(y,path.join(d[i]))
                fs.rename(u,k,() => {    
                 })
            })


        }
        else if(path.extname(d[i])===".mp3"||path.extname(d[i])===".txt"){
    let y = path.join(dir, "songs")
            fs.mkdir(y, () => {
                let u = path.join(dir, d[i])
                let k= path.join(y,path.join(d[i]))
                fs.rename(u,k,() => {
                    
               
                 })
            })


        }

    }

})  