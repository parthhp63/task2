const router = require("express").Router();
const retry=require('/home/parth-patil/Node/task2/middleware/retry.js');
var cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get('/',retry.retry,(req,res)=>{
    res.render('firstview.ejs');
  })

  module.exports=router;  