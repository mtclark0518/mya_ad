const express = require('express');
const path = require('path');
const app = express();
const {Client} = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});
client.connect();


const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'assistant_director/build')));


app.get('/test', (req, res) => {
    res.json('fuckin a bro');
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/assistant_director/build/index.html'));
});



app.listen(PORT, () => console.log('listening on ' + PORT))
