const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'app/build')));


app.get('/test', (req, res) => {
    res.json('fuckin a bro');
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/app/build/index.html'));
});



app.listen(PORT, () => console.log('listening on ' + PORT))
