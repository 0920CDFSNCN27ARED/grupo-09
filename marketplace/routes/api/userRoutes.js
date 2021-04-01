const express = require('express');
const router = express.Router();

const userAPIController = require('../../controllers/api/userController');

router.get('/', userAPIController.index);

router.get('/:id', userAPIController.getOne);

module.exports = router;
