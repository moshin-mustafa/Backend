// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

import { a, b, c, d, e } from "./secondmain.js";

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
import m from "./secondmain.js"
console.log(m)

// console.log(e)

// these were the example of Esm for commonjs example  look at server.js file in the main backend folder  
// we can not use import if the type in pkg.json is commonjs and wise versea