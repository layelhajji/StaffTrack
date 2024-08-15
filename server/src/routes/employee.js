
const express=require('express')
const EmpController=require('../controllers/employee')
const router=express.Router()
const cors=require('cors')

router.use(cors())

router.post('/add',EmpController.createEmp)
router.get('/employee',EmpController.getAllEmployees)


module.exports=router;