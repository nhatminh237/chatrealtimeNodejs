const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    friend: [{
        type: Array
    }],
});
const user = mongoose.model('user', UserSchema);
module.exports = user;