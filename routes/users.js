const router = require('express').Router();

const {
  createUser, getAllUser, getUser, profileUpdate, avatarUpdate,
} = require('../controllers/users');

router.get('/users', getAllUser);
router.post('/users', createUser);
router.get('/users/:userId', getUser);
router.patch('/users/me', profileUpdate);
router.patch('/users/me/avatar', avatarUpdate);

module.exports = router;
