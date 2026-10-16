SELECT name ,city from  students
<!-- select *from students; -->
day 4  new quries
q1:select * from  students where city="Quetta"   ;


q2:select *  from  students where city='Quetta' and id = 20 ;


q3:select *  from  students where city='Quetta' and id = 20 or city='Rawalpindi' ;


q4:SELECT * from students where city = 'Quetta' and id !=1


q5:SELECT * from students where city = 'Quetta' ORDER BY name DESC


q5: SELECT * from students ORDER BY id DESC  LIMIT 3 


q6;SELECT DISTINCT name FROM students;


q7:SELECT COUNT(DISTINCT city) FROM students;


q8:SELECT COUNT(*) FROM students;



q9:UPDATE students
SET city = 'Lahore'
WHERE id = 2;


q10:UPDATE students
SET city = 'Islamabad'
WHERE id=3;




quries to insert data
INSERT INTO students (id,name,city)
VALUES (22, 'abdul', 'Quetta');





theory notes for pratca 


### Quick comparison

- `AND` — both conditions must be true.
- `OR` — at least one condition must be true.

## Your turn

Suppose you want to find students who live in Quetta but whose ID is not 3.

Which operator do you think we should use to express “not equal to” in PostgreSQL?

A) `!=`

B) `NOT =`

C) `<>`









Let's dry-run the query:

```
WHERE city = 'Quetta' AND id != 1
```

Remember, `AND` means both conditions must be true.

| Student    | City is Quetta? | ID is not 1? | Returned? |
| ---------- | --------------- | ------------ | --------- |
| Mohsin (1) | Yes             | No           | No        |
| Ali (2)    | No              | Yes          | No        |
| Sara (3)   | Yes             | Yes          | Yes       |

Why? Mohsin fails the second condition because his ID is 1. Ali fails the first condition because he lives in RWP. Sara satisfies both.

### Your next question

What if we change `AND` to `OR`?

```
SELECT *
FROM students
WHERE city = 'Quetta' OR id != 1;
```

Which students will this return?

A) Sara only

B) Mohsin and Sara

C) All three students

Think through each condition before answering.



Not quite — the correct answer is C) All three students.

Let's dry-run it. The query uses `OR`, so at least one condition must be true.

```
WHERE city = 'Quetta' OR id != 1
```

| Student    | City is Quetta? | ID is not 1? | Returned? |
| ---------- | --------------- | ------------ | --------- |
| Mohsin (1) | Yes             | No           | Yes       |
| Ali (2)    | No              | Yes          | Yes       |
| Sara (3)   | Yes             | Yes          | Yes       |

- Mohsin: His city is Quetta, so the first condition is true.
- Ali: His ID is 2, not 1, so the second condition is true.
- Sara: Both conditions are true.

Remember: with `OR`, just one true condition is enough.

## Quick check

What is the main difference?

- `AND` — both conditions must be true.
- `OR` — at least one condition must be true.

Your turn: If a student lives in RWP and has ID 1, would this query return that student?

```
WHERE city = 'Quetta' OR id != 1
```

Answer Yes or No, and explain why in one sentence.




## Next practice: `LIMIT`

Suppose your `students` table has 20 records, but you only want to display the first 5 students.

PostgreSQL has a keyword called `LIMIT` that controls how many rows are returned.

For example:

```
SELECT *
FROM students
LIMIT 5;
```

This returns at most five rows.

Your turn: How would you write a query to display the 3 students with the highest IDs?

Hint: You'll need `ORDER BY`, `DESC`, and `LIMIT`. Try writing the complete query yourself.




Next practice: DISTINCT
Suppose your students table contains these cities:
Quetta, RWP, Quetta, Lahore, RWP
You want to display each city only once, without duplicates.
Which SQL keyword should you use?
A) UNIQUE
B) DISTINCT
C) LIMIT
Choose your answer first.


Next practice: COUNT()
Now let's learn how to count records.
Suppose you want to know how many students are in your table. PostgreSQL provides the COUNT() function.
Example:
SELECT COUNT(*)
FROM students;


This returns the total number of rows in the table.
Your turn: What do you think COUNT(*) counts?
A) The number of columns
B) The number of rows
C) The number of unique names


Next practice: UPDATE
Let's learn how to modify existing data. This is part of SQL CRUD, which we'll study step by step.
Suppose Ali's city changes from RWP to Lahore.
Which SQL command is used to modify an existing row?


Next practice — DELETE
Suppose you want to remove a student record from the table.
Which SQL command removes existing rows?
A) DROP
B) DELETE
C) REMOVE
Choose your answer first.



Your turn — one important safety question
Suppose you accidentally run:
DELETE FROM students;


There is no WHERE clause.
What happens?
A) Only one row is deleted.
B) All rows are deleted, but the table still exists.
C) The table and its structure are deleted.