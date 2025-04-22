const iphoneController = require('../controllers/iPhoneController');
// Define iPhone-related routes
const iphoneRoute = (app) => {
    // Route for handling all iPhones
    app.route('/iphone')
        .get(iphoneController.viewAlliPhones)       // Get all iPhones
        .post(iphoneController.addNewiPhone)        // Add a new iPhone
        .delete(iphoneController.deleteAlliPhones); // Delete all iPhones

    // Route for handling a specific iPhone by ID
    app.route('/iphone/:id')
        .get(iphoneController.viewiPhoneById)       // Get iPhone by ID
        .put(iphoneController.editiPhone)           // Edit iPhone by ID
        .delete(iphoneController.deleteiPhone);     // Delete iPhone by ID
};

module.exports = iphoneRoute;
