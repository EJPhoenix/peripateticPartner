const ItineraryController = require('../controllers/itinerary.controller');
module.exports = (app) => {
    app.get('/api', ItineraryController.index);
    app.post('/api/itinerary', ItineraryController.createItinerary);
    app.get('/api/itinerary', ItineraryController.getAllItineraries); 
    app.get('/api/itinerary/:id', ItineraryController.getItinerary);
    app.put('/api/itinerary/:id', ItineraryController.updateItinerary);
    app.delete('/api/itinerary/:id', ItineraryController.deleteItinerary);
}