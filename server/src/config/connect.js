const mongoose=require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/Employee_Management")

mongoose.connection.on('connected', () => {
    console.log('Connected');
  });
  
  
  mongoose.connection.on('error', err => {
    console.error('Mongoose connection error: ' + err);
  });

module.exports=mongoose;