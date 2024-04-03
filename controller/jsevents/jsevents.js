const router = require("express").Router();

const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')

router.get('/jsevent',authorization.authorization,(req,res)=>{
    res.render('jsevent.ejs')
})

module.exports=router;