const router = require("express").Router();
const conn=require('../../config/db');
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')


// City state via Ajax............

router.get("/citystate",(req,res)=>{
    res.render("city_state_ajax.ejs")
})
// Define endpoint for fetching cities based on state
router.get('/cities/:state', (req, res) => {
  const state = req.params.state;
  let cities = [];
  switch (state) {
    case 'AP':
      cities = ['Visakhapatnam', 'Vijayawada', 'Guntur'];
      break;
    case 'KA':
      cities = ['Bangalore', 'Mysore', 'Hubli'];
      break;
    case 'MH':
      cities = ['Mumbai', 'Pune', 'Nagpur'];
      break;
    default:
      cities = [];
  }
  res.json(cities);
});

module.exports=router