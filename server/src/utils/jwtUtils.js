//generate token
const jwt=require('jsonwebtoken');
const secretkey=require("../config/jwtconfig");
 



function generateToken(admin){
    const payload={
        id:admin._id,
        email:admin.email,
    }

    return jwt.sign(payload,secretkey);

};
module.exports={generateToken};