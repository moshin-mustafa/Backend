 import express from 'express';
import pool from './db.js';

const app = express();

app.get('/', async (req, res) => {
      try {
        const id = req.query.id;
        // The important detail is that query parameter values are generally received as strings.

// So even though the URL contains id=3, JavaScript receives:
// id = "3";


// Notice the quotation marks. They indicate a string.

// JavaScript sees a difference between these two values:
// Value	Type
// "3"	String
// 3	Number
if (Number(id)<=0 ||Number.isInteger(Number(id))==false){// this is the another way
    return res.status(400).json({
        Error:"invalid name"
    })
}
        const result = await pool.query(
            'SELECT id FROM students WHERE id = $1',
            // console.log([id])
            [Number(id)],
            // console.log([Number(id)])
        );
if (result.rows.length === 0) {
    return res.status(404).json({
        error: "Student not found"
    });
}
        res.json(result.rows);
console.log(result.rows)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});
app.get('/mypage', async (req, res) => {
      try {
        const name = req.query.name;
if (name==false){// this is the another way
    return res.status(400).json({
        Error:"invalid name"
    })
}
        const result = await pool.query(
            'SELECT name FROM students WHERE name = $1',
            [name]
        );

        res.json(result.rows);
console.log(result.rows)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});



app.get('/search', async (req, res) => {
    try {
        const city = req.query.city;
        const name = req.query.name;
            name=name.trim()
            city=city.trim()
if (!name||name.trim() === ""|| !city||city.trim() === ""){    
        return res.status(400).json({
        error: 'Name  and city is required'
    });
}
        const result = await pool.query(
            'SELECT * FROM students WHERE city = $1 AND name = $2',
            [city,name]
        );

        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/students', async (req, res) => {
    const { name, city } = req.body;

    if (!name || name.trim() === '' ||
        !city || city.trim() === '') {
        return res.status(400).json({
            error: 'Name and city are required'
        });
    }

    try {
        const result = await pool.query(
            `INSERT INTO students (name, city)
             VALUES ($1, $2)
             RETURNING *`,
            [name.trim(), city.trim()]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Database error'
        });
    }
});
app.get('/students', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM students ORDER BY id'
        );

        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Database error'
        }); 
    }
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

