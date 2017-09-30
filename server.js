const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3412;
const app = express();
const router = require('./config/routes');
const {Client} = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});
client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, 'assistant_director/build')));

app.get('/api/test', (req, res) => {
    res.json('fuckin a bro. you are the fuckin main');
});
app.use('/', router);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/assistant_director/build/index.html'));
});

app.listen(PORT, () => console.log('listening on ' + PORT));


