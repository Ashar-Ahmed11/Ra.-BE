const mongoose = require('mongoose')

const URI = 'mongodb+srv://ashar2day:karachi2020@cluster0.mobyswx.mongodb.net/raisAkbar?appName=Cluster0'

const connectToMongo = () => mongoose.connect(URI, () => {
    console.log("Connected to Mongo Successfully")
})

module.exports = connectToMongo