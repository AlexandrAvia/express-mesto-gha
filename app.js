const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const userRoutes = require('./routes/users');
const cardRoutes = require('./routes/cards');
const { login, createUser } = require('./controllers/users');
const { auth } = require('./middlewares/auth');
const NotFoundError = require('./errors/not-found-err');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса

app.post('/signin', login);
app.post('/signup', createUser);

// авторизация
app.use(auth);

app.use(userRoutes);
app.use(cardRoutes);
app.use((req, res, next) => {
  next(new NotFoundError('Несуществующая страница.'));
});

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  res.status(statusCode).send({ message });
  next();
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Всё гуд!');
});
