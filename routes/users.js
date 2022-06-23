const router = require('express').Router();

const { createUser, getAllUser, getUser } = require('../controllers/users');

router.get('/users', getAllUser);
router.post('/users', createUser);
router.get('/users/:userId', getUser);

module.exports = router;
