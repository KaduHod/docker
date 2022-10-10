import http from 'http';
import * as env from 'dotenv';
import { connection } from '../database/db.js';

env.config()
const PORT = process.env.PORT

const handler = async (req, res) => {
    const db = await connection();
    const [rows] = await db.query('Select * from Heroes');
    res.setHeader("Content-type","application/json")
        .writeHead(200)
        .end(JSON.stringify( rows ));
}

await connection();

http.createServer(handler)
    .listen(PORT)
    .on('listening', () => console.log('\t - Servidor rodando localhost:' + PORT));


