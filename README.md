[![Tests](https://github.com/AlexandrAvia/express-mesto-gha/actions/workflows/tests-13-sprint.yml/badge.svg)](https://github.com/AlexandrAvia/express-mesto-gha/actions/workflows/tests-13-sprint.yml) [![Tests](https://github.com/AlexandrAvia/express-mesto-gha/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/AlexandrAvia/express-mesto-gha/actions/workflows/tests-14-sprint.yml)

# Проект Mesto фронтенд + бэкенд

Описание проекта: бэкэенд приложения с авторизацией и регистрацией пользователя Mesto.

Функционал: Проект реализован на Node.js с использованием фреймворка Express.js. В проекте выполнена API для авторизации и регистрации пользователя, API для работы с карточками (создание, удаление, проставление лайка). Защищены авторизацией все маршруты, кроме страницы регистрации и логина. При попытке неавторизованного пользователя обратиться к защищённому маршруту — возвращает 403 ошибку. API не возвращает хеш пароля. Реализована централизованная обработка ошибок. Валидированы приходящие на сервер запросы и данные на уровне схемы.

Стек: JavaScripts, Node.js, Express.js,.

Проект завершен.

Директории

## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки  
`/models` — папка с файлами описания схем пользователя и карточки


## Запуск проекта

`npm run start` — запускает сервер  
`npm run dev` — запускает сервер с hot-reload
