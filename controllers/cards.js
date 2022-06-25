const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  const userId = req.user._id;
  Card.create({ name, link, userId })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Карточка не найдена' });
        return;
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.path === '_id') {
        res.status(400).send({ message: 'Карточка с данным id не найдена' });
      } else {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

const likeCard = (req, res) => {
  const userId = req.user._id;
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: userId } }, { new: true })
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Карточка не найдена' });
        return;
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.path === '_id') {
        res.status(400).send({ message: 'Карточка с данным id не найдена' });
      } else {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

const dislikeCard = (req, res) => {
  const userId = req.user._id;
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: userId } }, { new: true })
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Карточка не найдена' });
        return;
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.path === '_id') {
        res.status(400).send({ message: 'Карточка с данным id не найдена' });
      } else {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
