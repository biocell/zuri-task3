const express = require('express');
const router = express.Router();
const { getUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/users');

router
    .route('/')
    .get(getUsers)
    .post(addUser);

router
    .route('/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = router;
