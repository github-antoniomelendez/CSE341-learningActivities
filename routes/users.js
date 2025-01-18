const express = require('express');
//This may be routes in my files REMEMBER
const router = express.Router();

const usersController = require('../controllers/users');

// This is part of RESTful API
// This route gets all items in the database
router.get('/', usersController.getAll);

// This route gets a single item from the database
router.get('/:id', usersController.getSingle);

// This route posts or creates a new item in the database
router.post('/', usersController.createUser);

// This route updates an item in the database (we can use patch or put)
router.put('/:id', usersController.updateUser);

// This route deletes an item in the database
router.delete('/:id', usersController.deleteUser);

module.exports = router;