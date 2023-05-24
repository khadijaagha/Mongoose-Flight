//can use this as a template for building another project

const mongoose = require('mongoose') //have to first require mongoose so we can connect to database

mongoose.connect(process.env.DATABASE_URL); //connect to the database 

const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})

