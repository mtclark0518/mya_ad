const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const db = require('./db/models');
const {Client} = require('pg');
const app = express();



const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});
app.use(express.static(path.join(__dirname, 'assistant_director/build')));

if('development' === app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/test', (req, res) => {
    res.json('fuckin a bro');
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/assistant_director/build/index.html'));
});

client.connect();
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, () => console.log('listening on ' + PORT));
});

