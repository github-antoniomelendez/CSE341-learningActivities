const express = require('express');
//this may be routes in my files REMEMBER
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

module.exports = router;