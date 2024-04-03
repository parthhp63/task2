const router = require("express").Router();

const login=require('../controller/login');

router.use(login);

module.exports = router;