const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.antonioRoute);
routes.get('/aida', lesson1Controller.aidaRoute);
routes.get('/alessandro', lesson1Controller.alessandroRoute);

module.exports = routes;