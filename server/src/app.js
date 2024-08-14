const express=require('express');
const cors = require('cors');
const app=express();
require("./config/connect")
const loginRouter=require('./routes/login')
const EmpRouter=require('./routes/employee')

app.use(express.json());


app.use('/auth',loginRouter)
app.use('/api',EmpRouter)




const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("server is running on port "+ PORT)
})