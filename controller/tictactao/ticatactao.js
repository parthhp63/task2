const router = require("express").Router();

const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')

router.get('/tictactao',authorization.authorization,(req,res)=>{
    res.render('tictactao.ejs');
})

module.exports=router;