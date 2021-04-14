const mongoose = require('mongoose')
const mongodb = async() => {
    await mongoose.connect('mongodb://localhost:27017/node_auth', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("ket noi thanh cong")
}
module.exports = mongodb