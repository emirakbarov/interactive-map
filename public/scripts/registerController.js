const User = require('../user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register
};