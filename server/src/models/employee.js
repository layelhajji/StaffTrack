const mongoose=require('mongoose')

const EmployeeSchema=mongoose.Schema({
    EmployeeID:Number,
    fullName:String,
    age:Number,
    phone:String,
    joinedDate:String
    
})


const Employee=mongoose.model( "Employee",EmployeeSchema)

module.exports=Employee;