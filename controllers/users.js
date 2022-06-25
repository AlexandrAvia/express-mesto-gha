const User = require('../models/user');

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
};

const getAllUser = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
};

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
};

const profileUpdate = (req, res) => {
  const { name, about } = req.body;
  const id = req.user._id;
  User.findByIdAndUpdate(id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Запрашиваемый пользователь не найден' });
        return;
      }
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

const avatarUpdate = (req, res) => {
  const { avatar } = req.body;
  const id = req.user._id;
  User.findByIdAndUpdate(id, { avatar }, { new: true })
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Запрашиваемый пользователь не найден' });
        return;
      }
      res.send({ data: user });
    })
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
};

module.exports = {
  createUser, getAllUser, getUser, profileUpdate, avatarUpdate,
};
