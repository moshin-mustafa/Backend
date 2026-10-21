https://chatgpt.com/share/6ad3e01b-bfcc-83ec-9914-25cebbffe6d8



important concept demostration in this 
Your /search route now demonstrates several important concepts:
- Reading query parameters with req.query.
- Validating required input.
- Using parameterized queries with $1 and $2.
- Returning 404 when no matching records are found.
- Handling database errors with try...catch.





For example:
const name = req.query.name;

const result = await pool.query(
    'SELECT * FROM students WHERE name = $1',
    [name]
);


Let's break it down:
- WHERE name = $1 — name is the database column.
- req.query.name — reads the user's value from the URL.
- [name] — passes that value safely to PostgreSQL.
If the user visits http://localhost:3000/?name=Ali, PostgreSQL effectively searches for rows where the name column equals "Ali".


Remember: the column name goes in the SQL query; the user's value goes in the values array





remember that parameterized queries protect values from SQL injection, but you should still validate user input.






next small topic: Input validation
This is the natural next step because your route currently accepts whatever the user puts in the URL.

For example:

http://localhost:3000/search?city=Quetta

The user has provided a city but omitted the name. Your route will receive undefined for req.query.name. PostgreSQL may then find no matching rows rather than telling the user that their input is incomplete.

We can learn to validate input before running the query.

Your first question:

If both city and name are required, where should you check that they exist?

After res.json(result.rows)


Before calling pool.query()


Inside the SQL values array

Inside app.listen()



