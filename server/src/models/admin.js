const mongoose=require('mongoose')
const bcrypt=require("bcrypt")

const adminSchema=mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      }
})
adminSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  });
  

const Admin=mongoose.model( "Admin",adminSchema)

module.exports=Admin;