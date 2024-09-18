const express = require('express');
const grievanceController = require('../controllers/grievanceController');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Grievance submission route
router.post('/grievance/add', grievanceController.addGrievanceController);
// Get grievances route (GET)
router.get('/grievances', grievanceController.getGrievanceController);

// Admin route
router.get('/admin', adminController.getAdmin);  
// Delete grievance by ID
router.delete('/grievance/:id', grievanceController.deleteGrievanceController);


module.exports = router;
