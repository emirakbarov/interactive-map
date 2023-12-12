const express = require('express');
require('dotenv').config();
const User = require('./user.js');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({extended: true}));
// app.use(express.json);
app.set('view-engine', 'ejs');
app.set('views', __dirname + '/html');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/restaurantInfo', (req, res) => {
    res.render('restaurantInfo.ejs');
});
app.get('/interactiveMap', (req, res) => {
    res.render('interactiveMap.ejs');
});
app.post('/register', async (req, res) => {
    const firstName = req.body.firstName;
    const surname = req.body.surname;
    const email = req.body.email;
    const password = req.body.password;
    let signup = 'fail';

    try {
        const newUser = new User({email, password, firstName, surname });
    
        await newUser.save();
    
        console.log('signup successful');
        
        signup = 'success';
    } catch (err) {
        console.error(err);
        signup = 'failed';
        res.status(500).send('Internal Server Error');
    }
    const referer = req.headers.referer || '/';   
    res.redirect(`${referer}?signup=${signup}`);
});
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});
mongoose.connection.once('open', () => {
    console.log("database connected");
    app.listen(port, () => {
        console.log('server running on port', port);
    });
});

async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology:true,
            useNewUrlParser:true
        });
    } catch(err) {
        console.error(err);
    }
}