const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');
const res = require('express/lib/response');

const router = Router();

// TODO: Implement route controllers for user
router.get('/api/users', (req, res) => {
    const allUsers = UserService.searchAll();
    res.send(allUsers);
})
router.get('/api/users/:id', (req, res) => {
    const oneUser = UserService.search(req.params.id);
    res.send(oneUser);
})
router.post('/api/users', createUserValid, (req, res) => {
    console.log(req.body)
    const newUser = req.body;
    return UserService.addUser(newUser);
    
    // res.status(200).send(`Added user ${newUser.firstName} ${newUser.lastName}`);
})
router.put('/api/users/:id', updateUserValid, (req, res) => {
    const userIdToUpdate = req.params.id;
    const userDataToUpdate = req.body;
    UserService.updateUser(userIdToUpdate, userDataToUpdate);
    res.status(200).send(`Updated user with id: ${userIdToUpdate}`)
})
router.delete('/api/users/:id', (req, res) => {
    const userIdToDelete = req.params.id;
    UserService.deleteUser(userIdToDelete);
    res.status(200).send(`Deleted user with id: ${userIdToDelete}`)
})

module.exports = router;

