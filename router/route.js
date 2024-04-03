const router = require("express").Router();

const firstview=require('../controller/firstview/firstview')
const login=require('../controller/login/login');
const first=require('../controller/first/first');
const dynamictable=require('../controller/dynamic_table/dynamictable')
const kukucube=require('../controller/kukucube/kukucube');
const tictactao=require('../controller/tictactao/ticatactao');
const sorting=require('../controller/sorting/sorting');
const jsevents=require('../controller/jsevents/jsevents');
const student_pagi=require('../controller/student_detail_pagination/studnet_detail_pagi');
const stu_percentage=require('../controller/student_percentage/student_percentage');
const resultandreport=require('../controller/resultandreport/resultandreport');
const dynamicquery=require('../controller/dynamicquery/dynamicquery');
const paramaters_based=require('../controller/paramaters_based/paramaters');
const delimeter=require('../controller/delimeter_search/delimeter');
const combobox=require('../controller/combobox/combobox');
const crud_node=require('../controller/form_crud7march_node/form_crud_node');
const city_state=require('../controller/city_state_ajax/city_state_ajax');
const websites=require('../controller/html projects/websites');
const timezone=require('../controller/timezone/timezone');
const ajaxcrud=require('../controller/form_crud_ajax/crud_ajax');
const logout=require('../controller/logout/logout')

router.use(firstview);
router.use(login);
router.use(first);
router.use(dynamictable)
router.use(kukucube);
router.use(tictactao);
router.use(sorting);
router.use(jsevents);
router.use(student_pagi);
router.use(stu_percentage);
router.use(resultandreport);
router.use(dynamicquery);
router.use(paramaters_based);
router.use(delimeter);
router.use(combobox);
router.use(crud_node);
router.use(city_state);
router.use(websites);
router.use(timezone);
router.use(ajaxcrud);
router.use(logout);

module.exports = router;