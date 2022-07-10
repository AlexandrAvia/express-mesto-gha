const router = require('express').Router();

const {
  getAllUser, getUser, profileUpdate, avatarUpdate, getCurrentUser,
} = require('../controllers/users');

router.get('/users', getAllUser);
router.get('/users/:userId', getUser);
router.patch('/users/me', profileUpdate);
router.patch('/users/me/avatar', avatarUpdate);
router.get('/users/me', getCurrentUser);

module.exports = router;
