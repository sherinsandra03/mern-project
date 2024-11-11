const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/food-website', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db