const router = require("express").Router();
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')

router.get('/dynamictable',authorization.authorization,(req,res)=>{
    res.render('dynamictable.ejs');
})

module.exports=router;