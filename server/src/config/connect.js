const mongoose=require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/Employee_Management")

mongoose.connection.on('connected', () => {
    console.log('Connected');
    initializeAdmins();
    
  });
  
  
  mongoose.connection.on('error', err => {
    console.error('Mongoose connection error: ' + err);
  });

module.exports=mongoose;








const bcrypt=require("bcrypt")

const Admin = require('../models/admin'); 

const initializeAdmins = async () => {
  try {
    
    const admins = [
      { name: 'Admin One', email: 'admin1@example.com', password: 'password123' },
      { name: 'Admin Two', email: 'admin2@example.com', password: 'password456' },
      
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
    mongoose.connection.close();
  } catch (error) {
    console.error('Error initializing admins:', error);
    mongoose.connection.close();
  }
};


