import express from 'express'
// import path from "path"
const app = express();
const port = 3000;
app.set('view engine','ejs')
// const __dirname = path.dirname(__f);
app.get('/', (req, res) => {
  let site_name="mohsin web_page "
  let pages = "lining my pages"
  res.render(`index`,{  site_name:site_name,pages:pages
  });
 
   
// res.send("hello")
});
//we used method 2 form the chat gpt 
app.get('/about', (req, res) => {
  // res.sendFile(`./templetes/index.html`,{root:__dirname});
// res.send("hello")
let age=20
let students= ["ali","usman","bashir","ahemd"]
let site_name= "my web page "
let classs= [{id:1,city:"quetta",name:"mohsin"},{id:2,city:"sgd",name:"faruq"},{id:3,city:"islamabad",name:"mujtaba"}]
let newobj=[{id:1,city:"fasilabad",name:"liza"},{id:2,city:"chkwal",name:"umair"},{id:3,city:"rwp",name:"ayseha"}]
res.render('index',{age:age ,site_name:site_name,students,classs,newobj})
console.log(newobj[0])
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});