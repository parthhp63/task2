const router = require("express").Router();

const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')

router.get('/sorting',authorization.authorization,(req,res)=>{
    res.render('sorting.ejs');
})

module.exports=router;
