const express = require('express');
const mongoose = require('mongoose');
const auth = require('./auth.js');
const bp = require('body-parser');

mongoose.connect('mongodb+srv://akbarovemir3:zK7pIQ89F9VXyCly@visit-paris.vuj0arg.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error', err => console.log(err));
db.once('open', () => console.log('Database Connected'), {
    userNewUrlParser: true,
    userUnifiedTopology: true,
    tls: true,
    tlsAllowInvalidHostnames: true
});

const app = express();
const port = 5500;

app.use(bp.urlencoded({extended: true}));
app.use(bp.json);
app.set('view-engine', 'ejs');
app.set('views', __dirname + '/html');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/restaurantInfo', (req, res) => {
    res.render('restaurantINfo.ejs');
});
app.get('/interactiveMap', (req, res) => {
    res.render('interactiveMap.ejs');
});
app.post('/register', auth.register);
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(port, () => {
    console.log('server running on port', port);
});