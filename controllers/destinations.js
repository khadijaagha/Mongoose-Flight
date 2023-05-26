const Flight = require('../model/flight');




async function createDestination(req, res, next) {
    
    
    try {
        const { id } = req.params
        console.log(id);
        const flight = await Flight.findById(id);
        flight.destinations.push(req.body);
        await flight.save()
        res.redirect(`/flights/${id}`);
    } catch (err) {
        console.log(err);
    }
    
}


module.exports = {
    createDestination
}
