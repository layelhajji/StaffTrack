const mongoose=require('mongoose')
const bcrypt=require("bcrypt")
const Admin = require('../models/admin'); 


mongoose.connect("mongodb://127.0.0.1:27017/Employee_Management")

mongoose.connection.on('connected', () => {
    console.log('Connected');
    initializeAdmins();
    
  });
  
  
  mongoose.connection.on('error', err => {
    console.error('Mongoose connection error: ' + err);
  });

module.exports=mongoose;


//initialiser les admins
const initializeAdmins = async () => {
  try {
    
    const admins = [
      { name: 'Admin One', email: 'admin1@gmail.com', password: 'admin1@123' },
      { name: 'Admin Two', email: 'admin2@gmail.com', password: 'admin2@123' },
      
    ];

    for (let admin of admins) {
      let existingAdmin = await Admin.findOne({ email: admin.email });

      if (!existingAdmin) {
        const newAdmin = new Admin(admin);
        await newAdmin.save();
        console.log(`Admin ${admin.email} created.`);
      } else {
        console.log(`Admin ${admin.email} already exists.`);
      }
    }

    console.log('Admin initialization completed.');
    
  } catch (error) {
    console.error('Error initializing admins:', error);
    
  }
};


