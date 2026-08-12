Simple definition

Node.js is a runtime environment that allows JavaScript to run outside the browser.

JavaScript
     ↓
Node.js
     ↓
Your computer/server


Exercise 1 — Node fundamentals

Don't look for the solution yet. You write it yourself.

Create:

test.js
Task 1

Create three variables:

name
age
city

Give them your own values.

Then print:

My name is ...
I am ... years old
I live in ...
Task 2

Create:

let x = 15;
let y = 7;

Use Node.js to print:

addition
subtraction
multiplication
division
Task 3 — Important

Run your program without a browser.

Use:

node test.js
Task 4 — Think about this

Answer in your own words:

What is the difference between JavaScript and Node.js?


Why do you think window and document behave differently from process?
Browser JavaScript

When JavaScript runs inside Chrome, the browser gives it a bunch of built-in objects:

Browser
 ├── window
 ├── document
 ├── localStorage
 ├── alert()
 └── fetch()

For example:

document.querySelector("h1");

works because the browser provides document.
Node.js

When you run:

node server.js

there is no webpage.

There's no:

HTML
DOM
Chrome window

So Node doesn't provide:

window
document

That's why:

console.log(typeof window);

gives:

undefined

and:
undefined
undefined
object



The basic comparison
CommonJS	ESM
require()	import
module.exports	export
Older Node.js style	Modern JavaScript standard
Very common in older Node projects	Common in modern Node projects


But how does Node know which one we're using?

This is where package.json becomes important again.

By default, Node treats .js files as CommonJS in a typical project.

If you want your .js files to use ESM, you can put this in package.json:

{
  "type": "module"
}

Now Node interprets .js files as ESM.

For example:

Backend/
│
├── package.json
│
└── math.js

package.json:

{
  "type": "module"
}

Then:

// math.js

export function add(a, b) {
    return a + b;
}

and:

// server.js

import { add } from "./math.js";

console.log(add(5, 3));
![alt text](image.png)