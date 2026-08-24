
Part 2 — express.json()

This line is extremely important:

app.use(express.json())

Remember that our frontend is going to send:

{
    "username": "mohsin",
    "age": 22
}

That data is being sent as JSON.

express.json() tells Express:

"When a request contains JSON data, parse it so I can access it through req.body."

Without this, your POST data wouldn't be available to your route in the way you're expecting.

So:

JSON sent by client
       ↓
express.json()
       ↓
req.body


Your thinking is understandable, but **with your current code, `/user` should NOT print those things in the terminal**.

The key is that `/user` can be accessed with **two different HTTP methods**:

```text
GET /user
POST /user
```

You have two separate handlers:

```javascript
app.get("/user", (req, res) => {
    res.send(x);
});
```

and:

```javascript
app.post("/user", (req, res) => {
    console.log(req.body);
    console.log("user recived");
    res.send("new user found");
});
```

### When you type `/user` in the browser

The browser does:

```text
GET /user
```

Therefore this runs:

```javascript
app.get("/user", ...)
```

It sends the object to the **browser**:

```text
{ name: "Mohsin", age: 22 }
```

Nothing is printed in the terminal because your GET route has no `console.log()`.

---

### When `script.js` runs

Your JavaScript does:

```javascript
fetch("/user", {
    method: "POST",
    ...
})
```

That creates:

```text
POST /user
```

Therefore this runs:

```javascript
app.post("/user", ...)
```

and **then** your terminal gets:

```text
{ username: 'mohsin', age: 22 }
user recived
```

---

### So if you're expecting this:

> "When I go to `/user`, the terminal should say `user received` and show the object."

Then you're expecting a **GET request to execute your POST route**.

It won't.

```text
URL          Method       Route that runs
────────────────────────────────────────────
/user        GET          app.get("/user")
/user        POST         app.post("/user")
```

**Same URL, different method = different route.**

This distinction is one of the most important things to understand about Express. Once this clicks, GET/POST will make much more sense.
