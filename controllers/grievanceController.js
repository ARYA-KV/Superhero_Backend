const Grievance  = require('../models/grievanceModel')
const nodemailer = require('nodemailer');

//add grievance



exports.addGrievanceController = async (req, res) => {
    try {
      const { firstName, lastName, fullAddress, pincode, complaint, mobileNumber  } = req.body;
  
      const newGrievance = new Grievance({
        firstName,
              lastName,
             fullAddress,
             pincode,
              complaint,
              mobileNumber
      });
  
      await newGrievance.save();
  
      let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
          user: process.env.SENDER_EMAIL, 
          pass: process.env.SENDER_EMAIL_PASSWORD, 
        },
      });
  
      let mailOptions = {
        from: process.env.SENDER_EMAIL, 
        to: 'adhirazro@gmail.com', 
        subject: 'New Grievance Submitted',
        text: `A new grievance has been submitted:\n\nComplaint: ${complaint}\nLocation: ${fullAddress}`,
        html: `<h1>New Grievance Submitted</h1>
             <p><strong>Complaint:</strong> ${complaint}</p>
             <p><strong>Location:</strong> ${fullAddress}</p>
             <p>Please check the system for more details.</p>`,
    };
    
  
      await transporter.sendMail(mailOptions);
  
      res.status(201).json({ message: 'Grievance submitted successfully' });
  
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };





// Get all grievances
exports.getGrievanceController = async (req, res) => {
    try {
        const grievances = await Grievance.find();

        res.status(200).json({
            message: 'Grievances retrieved successfully',
            data: grievances
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete grievance
exports.deleteGrievanceController = async (req, res) => {
    try {
        const { id } = req.params; 

        const result = await Grievance.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Grievance not found' });
        }

        res.status(200).json({ message: 'Grievance deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
