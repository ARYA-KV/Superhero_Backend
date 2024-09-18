const Admin = require('../models/adminModel');

// Get the single admin
exports.getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findOne(); 
        
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
