const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'LHR']
    } ,
    arrival:{
        type: Date
    }
    
})


const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('flight', flightSchema);

