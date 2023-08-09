const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    view: {
        type: String,
        default: 'daily'
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

// UserSchema -> Collection in DB, (name, email, etc) -> fields, new mongoose.Schema({}) -> Document
// ODM -> Object Document Mapper used in MongooseDB
// ORM -> Object Relatinal Mapper used in MySQL
