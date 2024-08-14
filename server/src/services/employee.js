const Employee = require('../models/employee');

async function createEmp(EmployeeData) {
    const { EmployeeID, fullName, age, phone, joinedDate } = EmployeeData;

    // Vérification de l'existence de l'employé par EmployeeID
    const existingEmployee = await Employee.findOne({ EmployeeID });
    
    if (existingEmployee) {
       
        console.log('Employee already exists:', existingEmployee);
        return existingEmployee; 
    }

    
    const newEmployee = new Employee({
        EmployeeID,
        fullName,
        age,
        phone,
        joinedDate
    });

    const savedEmployee = await newEmployee.save();
    return savedEmployee;
}

module.exports = { createEmp };
