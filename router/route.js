const router = require("express").Router();

const firstview=require('../controller/firstview/firstview')
const login=require('../controller/login');
const first=require('../controller/first/first');


router.use(firstview);
router.use(login);
router.use(first);

module.exports = router;