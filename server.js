import express from 'express'
const app = express();
import pg from 'pg';
const client = new pg.Client({
	database:'postgres'
})

app.get('/', async (req, res)=>{
	const result = await client.query("SELECT 'hello world!' AS message");
	res.send(result.rows[0].message);
})

client.connect(()=>{
	console.log('connected to postgres');
})
app.listen(3000, ()=>{
	console.log('listening');
});
