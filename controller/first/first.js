const router = require("express").Router();

const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')

router.get('/first',authorization.authorization,(req,res)=>{
    res.render('home.ejs');
})
module.exports=router;