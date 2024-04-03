const router = require("express").Router();

router.get('/',(req,res)=>{
    res.render('firstview.ejs');
  })

  module.exports=router;