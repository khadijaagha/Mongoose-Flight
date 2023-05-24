const Flight = require('../model/flight');
module.exports = {
    new: newFlight,
    create,
    index
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

function newFlight (req, res) {
    res.render('flights/new', { errorMsg: '' });
}