const user = require('./user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if (err) {
            console.log(err);
        }
        let user = new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: hashedPass
        });
        user.save().then(user => {
            res.json({
                message: 'User Added Successfully'
            })
        }).catch(res.json({message: 'An Error Occured'}));
    });
}

module.exports = {
    register
};