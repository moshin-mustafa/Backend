 import express from 'express';
import pool from './db.js';

const app = express();

app.get('/', async (req, res) => {
      try {
        const id = req.query.name;
// if (!id){
//         return res.status(400).json({
//         error: 'Name  and city is required'
//     });
// }
        const result = await pool.query(
            'SELECT name FROM students WHERE name = $1',
            [id]
        );

        res.json(result.rows);
console.log(result.rows)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.get('/search', async (req, res) => {
    try {
        const city = req.query.city;
        const name = req.query.name;
if (!name || !city){
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
