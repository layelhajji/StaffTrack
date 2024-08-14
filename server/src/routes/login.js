const express=require('express')
const {login}=require('../controllers/login')
const router=express.Router()
const cors=require('cors')

router.use(cors())

router.post('/login',login)


module.exports=router;