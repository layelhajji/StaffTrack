const Admin = require('../models/admin'); 
const bcrypt =require("bcrypt");
const {generateToken}=require("../utils/jwtUtils")


async function login(email, password) {
    try {
        const existingAdmin = await Admin.findOne({ email });
        if (!existingAdmin) {
            console.log("Admin not found with email:", email);
            throw new Error("Admin not found");
        }

        console.log("Admin found:", existingAdmin);

        const isPasswordValid = await bcrypt.compare(password, existingAdmin.password);
        console.log("Is password valid:", isPasswordValid);

        if (!isPasswordValid) {
            throw new Error("Incorrect password");
        }

        const token = generateToken(existingAdmin);
        console.log("token : ",token)
        return token;
    } catch (error) {
        console.log("Error during login:", error.message);
        throw new Error("Invalid credentials");
    }
}
module.exports={login}