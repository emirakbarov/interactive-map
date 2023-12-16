const express = require('express');
require('dotenv').config();
const User = require('./user.js');
const mongoose = require('mongoose');
const bp = require('body-parser');
const nodemailer = require('nodemailer');;

const app = express();
const port = 3000;

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
    let signup;

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
app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    checkForUser(email, password);

    async function checkForUser(email, password) {
        console.log('in function');
        const user = await User.findOne({ 'email' : email, 'password' : password });
        const referer = req.headers.referer || '/';
        let logged;
        if (user) {
            //const verificationContainer = document.getElementById("verification-container");
            //const code = document.querySelectorAll(".code");
            //verificationContainer.style.backgroundColor = "transparent";
            // code.forEach(code => { code.readOnlu = false});
            // console.log('success');
            verifyUser();
        }
        else {
            logged = 'failed';
            console.log('login unsuccessful');
        }
        res.redirect(`${referer}?logged=${logged}`);
    }
    function verifyUser(email) {
        // const rawCode = req.body.code;
        // console.log(rawCode);
        // const code = rawCode.join('');
        let sentCode ='';
        for (let i=0; i <6; i++) {
            let number = Math.floor(Math.random() * 10);
            sentCode += number;
        }
        console.log(sentCode);
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ecode3456@gmail.com',
              pass: 'EmirCode33'
            }
        });
          
        let mailOptions = {
            from: 'ecode3456@gmail.com',
            to: email,
            subject: 'Code - Visit Paris',
            text: 'Your code is: ' + sentCode
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
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