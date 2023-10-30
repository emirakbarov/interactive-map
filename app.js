const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5500;

// mongoose.connect('mongodb+srv://akbarovemir3:zK7pIQ89F9VXyCly@visit-paris.vuj0arg.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser : true,
//     useUnifiedTopology: true,
//     tls: true
// });

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
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(port, () => {
    console.log('server running on port', port);
});