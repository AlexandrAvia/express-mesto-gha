const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { regex } = require('../utils/constant');

const {
  getAllUser, getUser, profileUpdate, avatarUpdate, getCurrentUser,
} = require('../controllers/users');

router.get('/users', getAllUser);
router.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24).required(),
  }),
}), getUser);
router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }).unknown(true),
}), profileUpdate);
router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(new RegExp(regex)).required(),
  }),
}), avatarUpdate);
router.get('/users/me', getCurrentUser);

module.exports = router;
