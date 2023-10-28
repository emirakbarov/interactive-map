const express = require('express');
const app = express();
const port = 5500;

app.set('view-engine', 'ejs');
app.set('views', __dirname + '/html');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log('server running on port', port);
});