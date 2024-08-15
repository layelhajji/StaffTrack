const employeeService = require('../services/employee');

async function createEmp(req, res) {
    try {
        const EmployeeData = req.body;
        const result = await employeeService.createEmp(EmployeeData);

        if (result.success) {
            res.status(201).json(result.employee); // 201 pour "Created"
        } else {
            res.status(409).json({ message: result.message }); // 409 pour "Conflict"
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message }); // 500 pour "Internal Server Error"
    }
}

async function getAllEmployees(req,res) {
    try {
        const employees=await employeeService.getAllEmployees()
        res.json(employees)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
    
}
async function getEmployeeByID(req,res) {
    const employeeId=req.params.id
    try {
        
        const employee=await employeeService.getEmployeeByID(employeeId)
        if(!employee){
            return res.status(404).json({ error:"Employee not found " });
        }
        res.json(employee)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
    
}
async function deleteEmployee(req,res) {
    const employeeId=req.params.id
    try {
        
        const deletedEmployee=await employeeService.deleteEmployee(employeeId)
        if(!deletedEmployee){
            return res.status(404).json({ error:"Employee not found " });
        }
        res.json(deletedEmployee)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
    
}

module.exports = { createEmp ,getAllEmployees,getEmployeeByID,deleteEmployee};
