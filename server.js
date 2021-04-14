require('dotenv').config({ path: './config.env' })
const express = require('express');
const cors = require('cors')
const mongodb = require('./config/db')
const app = express();

app.use(express.json())
app.use(cors())
mongodb()

app.use('/api/authen', require('./route/authen'))
app.use(require('./middleware/error'))



const port = process.env.PORT || 5000;
const server = app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`server running on ${port}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(err);
    server.close(() => process.exit(1))
})