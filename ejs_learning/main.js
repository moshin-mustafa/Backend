import express from 'express'
import path from "path"
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(`./templetes/index.html`,{root:__dirname});
// res.send("hello")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});