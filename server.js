const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3412;
const db = require('./db/models');
const app = express();

// if('development' === app.get('env')) {
//     app.use(express.errorHandler());
// }
const {Client} = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});
client.connect();

app.use(express.static(path.join(__dirname, 'assistant_director/build')));

app.get('/api/test', (req, res) => {
    res.json('fuckin a bro. you are the fuckin main');
});
app.get('/api/location', function(req, res) {
    db.models.Location.findAll({
        include: [ { model: db.models.Student } ]
    }).then(function(locations) {
        console.log('here are your locations');
        res.json(locations);
    });
});
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/assistant_director/build/index.html'));
// });

// db.sequelize.sync().then(function() {
app.listen(PORT, () => console.log('listening on ' + PORT));


