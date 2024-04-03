const router = require("express").Router();
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')

router.get('/timezone',authorization.authorization,(req,res)=>{
    res.render('timezone.ejs')
  })

  module.exports=router;