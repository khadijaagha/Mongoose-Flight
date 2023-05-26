const Flight = require('../model/flight');
module.exports = {
    new: newFlight,
    create,
    index,
    show
}


async function show (req, res, next) {
    
    try {
        console.log(req.params);
        const { id } = req.params;
        const flight = await Flight.findById(id);
        console.log(flight);
        res.render('flights/show', {
            flight,
            title: flight.title,
            airline: flight.airline,
            airport: flight.airport,
            flightNo: flight.flightNo,
            departs: flight.departs,
            destination: flight.destinations
        })
        
    } catch (err) {
        console.log('ERROR MESSAGE -->', err.message);
        next();
    }
}

async function index (req, res) {
    let flights = await Flight.find();
    res.render('flights', {flights});
}

function create (req, res) {
    console.log(req.body);
    //models are responsible for CRUD'ing data
    Flight.create(req.body);
    //always do redirect when data is changed
    res.redirect('/flights');
  }

async function newFlight (req, res, next) {
    res.render('flights/new', { errorMsg: '' });
}