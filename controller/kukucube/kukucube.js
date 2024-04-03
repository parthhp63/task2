const router = require("express").Router();
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')

router.get('/kukucube',authorization.authorization,(req,res)=>{
    res.render('kukucube.ejs');
})

module.exports=router;