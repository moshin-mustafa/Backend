import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'school',
    password: '3860064ama',
    port: 5432
});

export default pool;