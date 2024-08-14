const employeeService = require('../services/employee');

async function createEmp(req, res) {
    try {
        const EmployeeData = req.body;

        
        const savedEmployee = await employeeService.createEmp(EmployeeData);

        if (savedEmployee.success) {
            res.status(200).json(savedEmployee);
        } else {
            res.status(409).json({ message: savedEmployee.message });
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createEmp };
