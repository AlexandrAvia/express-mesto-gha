const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const cardRoutes = require('./routes/cards');
const { login, createUser } = require('./controllers/users');
const { auth } = require('./middlewares/auth');

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
app.use((req, res) => {
  res.status(404).send({ message: 'Несуществующая страница' });
});

app.listen(PORT);
