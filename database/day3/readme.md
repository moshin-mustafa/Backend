Part 7 — Constraints
Now we have an important concept connected to primary keys:
Constraints
A constraint is a rule PostgreSQL uses to control what data can be stored in a table.

Some important ones are:
Constraint	            Purpose
PRIMARY KEY	            Uniquely identifies a row
NOT NULL	            Value must be provided
UNIQUE	                No duplicate values
DEFAULT	                Provides a value automatically
CHECK	                Requires a condition to be true
FOREIGN KEY	            Connects tables


You don't need to learn all of them right now.
Let's focus on the first two.
PRIMARY KEY
id INTEGER PRIMARY KEY

Means:
id must uniquely identify each row.

NOT NULL
Suppose every student must have a name:
name TEXT NOT NULL

Then this would not be allowed:
id | name | city
---+------+------
4  |      | Lahore

because name is required.
Your turn
Imagine a students table has:
id       INTEGER PRIMARY KEY
name     TEXT NOT NULL
age      INTEGER

Which of these would PostgreSQL reject?
A
id = 4
name = 'Ahmed'
age = 20

B
id = 4
name = NULL
age = 20

C
id = 5
name = 'Sara'
age = NULL


Correct! ✅ B) TRUE

Because the column has `DEFAULT TRUE`, PostgreSQL automatically stores `TRUE` when you don't provide a value for `is_active`.

Let's dry-run it.

```
INSERT INTO students (id, name)
VALUES (4, 'Ahmed');
```

We didn't provide `is_active`, so PostgreSQL uses its default value.

| id | name  | is_active |
| -- | ----- | --------- |
| 4  | Ahmed | TRUE      |

Important: A `DEFAULT` value is used when you omit the column from the `INSERT` statement. If you explicitly provide `NULL`, PostgreSQL generally stores `NULL` instead, unless a constraint prevents it.

### Your turn — one question

Consider this table:

```
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE
);
```

You insert two students with different IDs but the same email address.

What happens?

- A Both students are inserted successfully.
- B The second insert fails because the email must be unique.
- C The second insert fails because IDs must be unique.


Let's go! We'll continue with Stage 1: PostgreSQL + pgAdmin basics, following our original plan.

We've covered data types, primary keys, `NOT NULL`, `DEFAULT`, and `UNIQUE`. Now let's understand one more constraint.

## Next concept: `CHECK`

A `CHECK` constraint makes PostgreSQL accept a value only when it satisfies a condition.

Imagine our `students` table has an `age` column. We don't want to allow negative ages.

```
age INTEGER CHECK (age >= 0)
```

This means:

- `age = 20` → accepted.
- `age = 0` → accepted.
- `age = -5` → rejected.
- `age = NULL` → allowed, unless we also add `NOT NULL`.

Notice that `CHECK` and `NOT NULL` do different jobs.

## Your turn — predict the result

Suppose we have this table definition:

```
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER CHECK (age >= 18)
);
```

Which records are valid?

Select all valid records.

A — id = 1, name = 'Ali', age = 20

B — id = 2, name = 'Sara', age = 16

C — id = 3, name = NULL, age = 22

D — id = 4, name = 'Ahmed', age = NULL

Check my answer

Think about both constraints: `name NOT NULL` and `age CHECK (age >= 18)`. Remember, we're learning to reason about the database rules, not just memorize them.




Excellent! ✅ A and D are correct.

Let's dry-run all four records to understand why.

| Option                    | Result     | Reason                                                                                                             |
| ------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| A — Ali, age 20           | ✅ Accepted | Age is at least 18, and name is provided.                                                                          |
| B — Sara, age 16          | ❌ Rejected | `age >= 18` is false.                                                                                              |
| C — `name = NULL`, age 22 | ❌ Rejected | `name NOT NULL` prohibits NULL names.                                                                              |
| D — Ahmed, age NULL       | ✅ Accepted | A `CHECK` constraint passes when its condition evaluates to `NULL` (unknown). `CHECK` alone doesn't prohibit NULL. |

Remember this distinction:

- `CHECK` controls which values are allowed.
- `NOT NULL` requires a value to be provided.

## Next concept: `FOREIGN KEY`

A foreign key connects records in two tables. For example, imagine we have:

- `students` — stores student information.
- `courses` — stores courses.
- `enrollments` — records which student takes which course.

An enrollment should reference a student who actually exists. A foreign key can enforce that rule.

But before we move on, let's check your understanding.

Suppose `students` contains IDs `1`, `2`, and `3`. An `enrollments` table has a foreign key referencing `students.id`.

Can we insert an enrollment with `student_id = 7` when no student with ID 7 exists?

- A Yes, because `student_id` is just an integer.
- B No, because the foreign key requires the referenced student to exist.

What do you think?


Correct! ✅ B — the foreign key requires the referenced student to exist.

Let's understand this using an actual SQL example, step by step, in our `school` database.

## 1. Create two tables

First, we have a `students` table. Each student has a unique ID.

```
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);
```

Now insert two students:

```
INSERT INTO students (id, name)
VALUES
    (1, 'Ali'),
    (2, 'Sara');
```

Our table now contains:

| id | name |
| -- | ---- |
| 1  | Ali  |
| 2  | Sara |

Next, we create an `enrollments` table. This table records which student has enrolled in a course.

```
CREATE TABLE enrollments (
    id INTEGER PRIMARY KEY,
    student_id INTEGER,
    course_name TEXT,
    FOREIGN KEY (student_id) REFERENCES students(id)
);
```

Focus on this line:

```
FOREIGN KEY (student_id) REFERENCES students(id)
```

It means that every non-NULL `student_id` in `enrollments` must match an existing `id` in `students`.

## 2. Test the foreign key

Example A — valid enrollment

```
INSERT INTO enrollments (id, student_id, course_name)
VALUES (1, 1, 'Database');
```

Accepted because student ID 1 belongs to Ali.

Example B — invalid enrollment

```
INSERT INTO enrollments (id, student_id, course_name)
VALUES (2, 7, 'Database');
```

Rejected because student ID 7 doesn't exist in `students`.

## 3. How the relationship looks

### students

`id` — PRIMARY KEY

`name`

1 — Ali

2 — Sara

Referenced by `enrollments.student_id`

### enrollments

`id` — PRIMARY KEY

`student_id` — FOREIGN KEY

`course_name`

1 — 1 — Database

Here, `students.id` is the primary key, and `enrollments.student_id` is the foreign key. They can have the same integer values because the foreign key refers to the student's ID.

One student can have multiple enrollment records, so this is a one-to-many relationship.

## 4. Your turn — predict before running

Suppose we have already inserted Ali with ID `1` and Sara with ID `2`.

What happens if we run this query?

```
INSERT INTO enrollments (id, student_id, course_name)
VALUES (3, 2, 'PostgreSQL');
```

A — It fails because student ID 2 is already used.

B — It succeeds because student ID 2 exists.

C — It fails because each student can enroll in only one course.

Submit answer

Think about what the foreign key actually checks. It doesn't automatically prevent a student from enrolling in multiple courses.



Great. Let's continue Stage 1 of our plan: PostgreSQL + pgAdmin basics.

We've learned primary keys, `NOT NULL`, `DEFAULT`, `UNIQUE`, `CHECK`, and foreign keys. Now let's understand one important part of foreign keys: what happens when we delete a student who already has enrollments?

## What if we delete a referenced student?

Suppose our tables contain:

`students`

| id | name |
| -- | ---- |
| 1  | Ali  |
| 2  | Sara |

`enrollments`

| id | student_id | course_name |
| -- | ---------- | ----------- |
| 1  | 1          | Database    |
| 2  | 2          | PostgreSQL  |

Now imagine we run:

```
DELETE FROM students
WHERE id = 2;
```

PostgreSQL normally rejects this deletion because Sara still has an enrollment referencing her. This prevents the database from keeping an enrollment linked to a student who no longer exists.

You can choose different behaviors when defining a foreign key, such as:

- `RESTRICT` — prevent deletion while referenced records exist.
- `CASCADE` — delete the related enrollment records automatically.
- `SET NULL` — set the referencing column to `NULL`, if the column permits it.

These behaviors are configured on the foreign key, not added to the `DELETE` query itself.

## Your turn — predict the result

Suppose the foreign key is defined like this:

```
FOREIGN KEY (student_id)
REFERENCES students(id)
ON DELETE CASCADE
```

If we delete Sara, whose ID is `2`, what happens to her enrollment?

A — PostgreSQL rejects the deletion.

B — Sara is deleted, but her enrollment remains.

C — Sara and her related enrollment records are deleted.

Submit answer

Take your time and reason through what `CASCADE` means.


Correct! ✅ C — Sara and her related enrollment records are deleted.

`ON DELETE CASCADE` tells PostgreSQL to automatically delete rows in the referencing table when the referenced student is deleted.

For example:

```
DELETE FROM students
WHERE id = 2;
```

If Sara has ID `2`, PostgreSQL will:

1. Delete Sara from `students`.
2. Delete every enrollment in `enrollments` where `student_id = 2`.

Enrollments belonging to other students remain untouched.

Important: Use `CASCADE` carefully. One deletion can trigger deletions in related tables.

## Next: Let's check what we've learned

We're still following our original plan. Before moving into SQL CRUD, we'll finish PostgreSQL basics and then practice these concepts in pgAdmin.

Here's a quick question:

Suppose a foreign key is defined as:

```
FOREIGN KEY (student_id)
REFERENCES students(id)
ON DELETE SET NULL
```

If we delete Sara, whose ID is `2`, what happens to her enrollment's `student_id`?

A — The enrollment record is deleted.

B — The enrollment remains, but its `student_id` becomes `NULL`.

C — PostgreSQL changes `student_id` to `0`.

Submit answer

Remember: `SET NULL` behaves differently from `CASCADE`.



Not quite — the correct answer is B) `public.students`. 👍

In PostgreSQL, the usual fully qualified table name is:

`schema_name.table_name`

So in our example:

- `school` — the database
- `public` — the schema
- `students` — the table

Therefore, the full table reference is `public.students`, inside the `school` database.

## Quick check

If we want to query the `students` table in the `public` schema, which SQL statement is correct?

A

```
SELECT * FROM public.students;
```

B

```
SELECT * FROM school.public;
```

C

```
SELECT * FROM students.public;
```

Your turn — choose A, B, or C.


Correct! ✅ A SELECT * FROM public.students;
- SELECT * means retrieve all columns.
- FROM public.students specifies the table named students in the public schema.
One important detail: this query runs against whichever database your SQL connection is already connected to. The database name school isn't normally included in the table reference.
Stage 1 progress
We've covered:
- Databases, schemas, tables, rows, and columns
- Data types such as INTEGER, TEXT, and BOOLEAN
- Constraints: PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT, and CHECK
- Foreign keys and ON DELETE behavior
Next, as planned, we'll practice these concepts in pgAdmin before moving to Stage 2: SQL CRUD operations.


futher will be continued on day4