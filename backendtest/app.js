const express = require('express');
const app = express();
const sqlite = require('sqlite3');

const port = 3000

const path = 'email.db';

const db = new sqlite.Database(path, err => {
	if (err) {
		return console.log(err);
	}
	db.run(`
CREATE TABLE IF NOT EXISTS email (
	email text primary key
)
`
);
	console.log('😁')
})

app.get('/', (req, res) => {
	res.send('teste')
})

app.post('/email', (req, res) => {
	res.send('Conexão feita com sucesso')
})

app.listen(port, () => {
	console.log(port)
})
