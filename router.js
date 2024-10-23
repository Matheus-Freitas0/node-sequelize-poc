const express = require('express');
const UserController = require('./userController'); 
const router = express.Router();

router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);
router.delete('/users/:id', UserController.deleteUser);
router.put('/users/:id', UserController.editUser);

module.exports = router;
