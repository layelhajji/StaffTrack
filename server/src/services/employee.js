const Employee = require('../models/employee');

async function createEmp(EmployeeData) {
    const { EmployeeID, fullName, age, phone, joinedDate } = EmployeeData;

    // Vérification de l'existence de l'employé par EmployeeID
    const existingEmployee = await Employee.findOne({ EmployeeID });
    
    if (existingEmployee) {
        // Retournez une réponse claire indiquant l'existence
        return { success: false, message: "Employee already exists", employee: existingEmployee };
    }

    // Créez un nouvel employé
    const newEmployee = new Employee({
        EmployeeID,
        fullName,
        age,
        phone,
        joinedDate
    });

    const savedEmployee = await newEmployee.save();
    return { success: true, employee: savedEmployee };
}



async function getAllEmployees() {
    return await Employee.find({})
    
}

module.exports = { createEmp ,getAllEmployees};
