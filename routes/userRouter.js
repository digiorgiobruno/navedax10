const express = require('express');

const router = express.Router();

const controller = require('../controller/userController');

//router.get('/', controller.home);
router.get('/', controller.create);

router.post('/store', controller.store);



module.exports = router;