Method 3 — Use express.static()
If you're going to have multiple HTML/CSS/JS files, you don't necessarily need sendFile() for every page.
For example:
project/
│
├── server.js
└── public/
    ├── index.html
    ├── style.css
    └── script.js

Then:
app.use(express.static("public"));

Now visiting:
http://localhost:3000/

can serve index.html automatically.



Now ejs 

ejs ma folder ka nam views rakhna hota ha aur index.ejs ho jy gi htmlsy aur server ma res.render ma sirf index lkhna ha as file name 
1. What is EJS?
EJS = Embedded JavaScript Templates.
EJS allows you to write HTML and put JavaScript inside it.


3. Why do we need EJS?
You've already worked with something like:
app.get("/", (req, res) => {
    res.sendFile(...);
});

sendFile() sends a fixed file.
For example:
<h1>Welcome</h1>

Every user gets the same thing.
But what if your server has:
const student = {
    name: "Mohsin",
    city: "Quetta",
    age: 20
};

You want the HTML to dynamically display:
Name: Mohsin
City: Quetta
Age: 20

You could manually construct HTML in JavaScript, but that becomes messy.
EJS gives you a clean separation:
server.js       → data + logic

15. EJS is NOT frontend JavaScript
This is an important distinction.
You already know browser JavaScript:
document.querySelector("button");

That JavaScript runs in the browser.
EJS JavaScript runs on the server while the page is being generated.
For example:
<% students.forEach(student => { %>
    <p><%= student.name %></p>
<% }) %>

That loop happens on the server.
The browser doesn't receive the EJS loop.
It receives the generated HTML.
ejs can recive server side data 

17. EJS vs fetch()
This connects directly to what you've been learning recently.
You previously had something like:
fetch("http://localhost:3000/student/students?id=1")

That's a client-side request.
The browser asks the server for data.
With EJS, the process can instead be:
Browser requests /
        ↓
Express route
        ↓
Express gets data
        ↓
EJS generates HTML
        ↓
HTML sent to browser

So EJS is one way of avoiding the need to fetch the initial page data using JavaScript


18. Very important: EJS doesn't replace Express
EJS is not a backend framework.
You still have:
Node.js
   ↓
Express
   ↓
EJS

Express handles:
- routes
- requests
- responses
- middleware
- APIs
EJS handles:
- HTML templates
- displaying server data
- conditional HTML
- loops
- reusable page sections
for mroe guidance on ejs goto  below link
<!-- 

https://chatgpt.com/share/6ac25350-4274-83e8-ad11-19db5e68bf73 


-->