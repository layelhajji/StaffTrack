const employeeService=require('../services/employee');


async function createEmp(req,res) {
    try {
        const EmployeeData=req.body
        const savedEmployee=employeeService.createEmp(EmployeeData)
        res.json(savedEmployee)
        

    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})  
    }
    
}


module.exports={createEmp};