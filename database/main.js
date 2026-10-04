import express from 'express';
import pool from './db.js';

const app = express();

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students');

        console.log(result.rows);

        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Database error');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});