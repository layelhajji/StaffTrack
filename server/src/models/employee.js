const mongoose=require('mongoose')

const EmployeeSchema=mongoose.Schema({
    fullName:String,
    email:String,
    password:String
})


const Employee=mongoose.model( "Employee",EmployeeSchema)

module.exports=Employee;