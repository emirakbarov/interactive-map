const express = require('express');
require('dotenv').config();
const User = require('./user.js');
const mongoose = require('mongoose');
const bp = require('body-parser');
const tokenGen = require('./tokenGen.js');

const app = express();
const port = 3000;
let token;
let recievedData;

const existingTokens = [];

connectDB();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
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

    token = tokenGen.generateUniqueToken(12, existingTokens);

    try {
        const newUser = new User({email, password, firstName, surname, token });
    
        await newUser.save();
        console.log('signup successful');
        
        signup = 'success';
    } catch (err) {
        console.log(err);
        signup = 'failed';
    }
    const referer = req.headers.referer || '/';   
    res.redirect(`${referer}?signup=${signup}&sessionID=${token}`);
});
app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    checkForUser(email, password);

    async function checkForUser(email, password) {
        const user = await User.findOne({ 'email': email, 'password': password });
        const referer = req.headers.referer || '/';
        let logged;
        if (user) {
            logged = 'success';
            token = user.token;
        } else {
            logged = 'failed';
            console.log('login unsuccessful');
        }
        res.redirect(`${referer}?logged=${logged}&sessionID=${token}`);
    }
});
app.post('/update', async (req, res) => {
    console.log('got to update');
    const receivedData = req.body.data;
    token = receivedData;

    const filter = { 'token': token };
    const update = {
        'email': req.body.email,
        'password': req.body.password,
        'firstName': req.body.firstName,
        'surname': req.body.surname,  
     };

    try {
        const user = await User.findOneAndUpdate(filter, update);
        console.log('success');
        res.send('Update successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
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
        console.log(err);
    }
}