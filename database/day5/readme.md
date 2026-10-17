crud operation
Next topic: SQL CRUD practice
We'll practise combining the commands rather than learning them in isolation:
1. Insert a student.
2. Retrieve that student using SELECT.
3. Update the student's city.
4. Delete the student using their ID.

qurries
q1:INSERT INTO students (id, name, city)
    VALUES (17,'mohsin' , 'Islamabad');

q2: select * from students WHERE id = 4

q3: UPDATE  students set city ='Islamabad' where id =4 

q4: DELETE from students where id= 4

q5: CREATE TABLE courses(
    id INT,
name VARCHAR(100)
    PRIMARY key (id)



q6:SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;  
     
);


q7:CREATE TABLE enrollments (
    student_id INTEGER REFERENCES students(id),
    course_id INTEGER REFERENCES courses(id),
    PRIMARY KEY (student_id, course_id)
);

<!-- the below qurry is used to make connection between stuent and the courses -->
q8:INSERT INTO enrollments (student_id, course_id)
VALUES (1, 10);


<!--  the below qurry is to w=see which student is enrolled in which subject -->
q9: SELECT
    students.name,
    courses.name
FROM enrollments
JOIN students
    ON enrollments.student_id = students.id
JOIN courses
    ON enrollments.course_id = courses.id;


                                    CRUD practice completed
                                        Create — INSERT
                                     Add a new student record.



                                        Read — SELECT
                                    Retrieve a record by its ID.



                                        Update — UPDATE
                                    Change Ahmed's city and verify the result.



                                        Delete — DELETE
                                    Remove the record and verify its absence.


Next topic: Multiple tables and relationships
We'll follow your original learning plan. Next, we'll learn how databases connect related information using primary keys and foreign keys.
Imagine a school database:
students
id (PK)	name
1	Mohsin
2	Ali

Connected through student_id

courses
id (PK)	student_id (FK)	course
1	1	PostgreSQL
2	1	JavaScript
3	2	Python

PK = Primary Key · FK = Foreign Key
Notice that Mohsin has two course records. We don't need to repeat all his student information in each course row.
First question
In this example, students.id uniquely identifies each student.
Why do you think the courses table uses student_id?
A) To store each student's name again.
B) To identify which student each course record belongs to.
C) To make every course ID unique.
Choose your answer first, and we'll build the concept from there.





That's the main purpose of a foreign key: it connects a record in one table to a record in another table.





That's the main purpose of a foreign key: it connects a record in one table to a record in another table.
Let's understand it using our example.
- students.id is the primary key (PK). It uniquely identifies each student.
- courses.student_id is the foreign key (FK). It refers to a student's ID in the students table.
For example, these two rows:
id	student_id	course
1	1	PostgreSQL
2	1	JavaScript
Both belong to Mohsin because his student ID is 1.
Next question — think carefully
Suppose Mohsin has id = 1, and Ali has id = 2.
Someone tries to insert this record into courses:
id	student_id	course
4	99	Python
But there is no student with ID 99 in the students table.
If courses.student_id has a properly defined foreign-key constraint, what happens?
A) PostgreSQL accepts the record normally.
B) PostgreSQL rejects the record because student ID 99 doesn't exist.
C) PostgreSQL automatically creates student 99.






For example, if courses.student_id references students.id, PostgreSQL checks that the referenced student exists before accepting the course record.
Practice 3 — One student, multiple courses
Look at these tables:
students
id	name
1	Mohsin
2	Ali
courses
id	student_id	course
1	1	PostgreSQL
2	1	JavaScript
3	2	Python
Mohsin has two course records, while Ali has one.
Your question: Does the foreign key courses.student_id have to be unique, or can multiple course records use the same student ID?
A) It must be unique; each student can have only one course record.
B) Multiple course records can use the same student ID.






This is how a one-to-many relationship works.
- One student can have many course records.
- Each course record references a student through student_id.
- The foreign key does not need to be unique.
Let's understand the relationship
students
Mohsin — ID 1

One student → many course records

Course record 1
student_id = 1


Course record 2
student_id = 1


Course record 3
student_id = 1



Next question — what does UNIQUE change?
Imagine we add a UNIQUE constraint to courses.student_id.
What would happen?
A) A student could still have multiple course records.
B) Each student ID could appear only once in the courses table.
C) PostgreSQL would allow course records for nonexistent students.



Yes, that is correct. A primary key in SQL cannot contain NULL values.  





Without UNIQUE, the table can contain:
id	student_id	course
1	1	PostgreSQL
2	1	JavaScript
3	1	Python
Mohsin (student_id = 1) can have three course records.
With UNIQUE (student_id), the second record for student 1 would be rejected because that student ID already exists in the table. That would prevent one student from having multiple course records.
Important distinction:
- FOREIGN KEY checks that the referenced student exists.
- UNIQUE prevents duplicate values in the constrained column.
- PRIMARY KEY combines uniqueness with NOT NULL.
Next practice — one-to-many vs one-to-one
Imagine you're designing a school database:
- A student can enroll in several courses.
- Each course enrollment belongs to one student.
Which relationship best describes students to enrollments?
A) One-to-one
B) One-to-many
C) Many-to-many




## Next lesson: Many-to-many relationships

So far, we've learned that one student can have many enrollment records. Now let's consider the relationship from the other direction.

Suppose a school offers three courses:

- PostgreSQL
- JavaScript
- Python

Mohsin takes PostgreSQL and JavaScript. Ali also takes PostgreSQL.

Here, one student can take many courses, and one course can have many students. This is called a many-to-many relationship.

### How do we design it?

### students

| id | name   |
| -- | ------ |
| 1  | Mohsin |
| 2  | Ali    |

Connected through enrollments

### enrollments

| student_id | course_id |
| ---------- | --------- |
| 1          | 10        |
| 1          | 20        |
| 2          | 10        |

References course IDs

### courses

| id | name       |
| -- | ---------- |
| 10 | PostgreSQL |
| 20 | JavaScript |

The `enrollments` table is called a junction table (also known as a linking or bridge table).

Notice:

- `(1, 10)` means Mohsin is enrolled in PostgreSQL.
- `(1, 20)` means Mohsin is enrolled in JavaScript.
- `(2, 10)` means Ali is enrolled in PostgreSQL.

The junction table contains two foreign keys: `student_id` references `students.id`, and `course_id` references `courses.id`.

## Your turn — apply the concept

A student enrolls in three courses. Another student also enrolls in one of those same courses.

Which table design best represents this many-to-many relationship?

A. Store all three course names directly in columns of the `students` table.

B. Create a separate database for every student-course combination.

C. Put a single `student_id` column in the `courses` table and allow only one student per course.

D. Use separate `students` and `courses` tables, linked by an `enrollments` junction table.

Check answer

After this, we'll practise identifying primary and foreign keys in a real table design, then build the relationship in PostgreSQL.





Good, your result shows that `students` and `courses` already exist in your database. We can reuse them. We only need to create the `enrollments` table.

And don't worry about the table design confusion. Let's break it down.

## 1. What does `enrollments` look like?

You don't write this table layout as a query. It's a design showing which columns the table needs and what each column does.

| Column       | Purpose                                            |
| ------------ | -------------------------------------------------- |
| `student_id` | Stores the ID of the student enrolling in a course |
| `course_id`  | Stores the ID of the course the student takes      |

For example, imagine the tables contain:

`students`

| id | name   |
| -- | ------ |
| 1  | Mohsin |
| 2  | Ali    |

`courses`

| id | name       |
| -- | ---------- |
| 10 | PostgreSQL |
| 20 | JavaScript |

Then `enrollments` might contain:

| student_id | course_id |
| ---------- | --------- |
| 1          | 10        |
| 1          | 20        |
| 2          | 10        |

This means Mohsin takes PostgreSQL and JavaScript, while Ali takes PostgreSQL.

## 2. How do we create `enrollments`?

We use `CREATE TABLE`. Here's the SQL, with each part explained:

```
CREATE TABLE enrollments (
    student_id INTEGER REFERENCES students(id),
    course_id INTEGER REFERENCES courses(id),
    PRIMARY KEY (student_id, course_id)
);
```

- `CREATE TABLE enrollments` creates the new table.
- `student_id INTEGER` creates a column that stores an integer.
- `REFERENCES students(id)` makes `student_id` a foreign key pointing to `students.id`.
- `course_id INTEGER REFERENCES courses(id)` connects each enrollment to an existing course.
- `PRIMARY KEY (student_id, course_id)` makes the pair unique and prevents duplicate enrollments.

Important: This assumes `students.id` and `courses.id` are integer primary keys. We'll verify that if PostgreSQL reports an error.

## 3. Your turn

Before running the query, answer this:

If we insert an enrollment with `student_id = 1` and `course_id = 10`, but no course with ID `10` exists in `courses`, what should PostgreSQL do?

A) Automatically create course 10.

B) Accept the enrollment anyway.

C) Reject the enrollment because the referenced course doesn't exist.

D) Delete student 1.

Choose your answer, and then we'll run the query together.