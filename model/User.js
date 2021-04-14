const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const UserSchema = mongoose.Schema;

const User = new UserSchema({
    Email: {
        type: String,
        data: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ],
        required: [true, 'vui long nhap email']
    },
    Name: {
        type: String,
        required: [true, 'vui long nhap ten']
    },
    passWord: {
        type: String,
        required: [true, 'vui long nhap password'],
        minLenght: 6,
        select: false

    }
})

User.pre('save', async function(next) {
    if (!this.isModified('passWord')) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.passWord = await bcrypt.hash(this.passWord, salt);
    next()
})
User.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.passWord)
}

const Users = mongoose.model('Users', User);

module.exports = Users;