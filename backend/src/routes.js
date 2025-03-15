//Importo somente a funcão router
import { Router } from 'express';

import DashboardController from './app/controllers/DashboardController.js';
import SessionsController from './app/controllers/SessionsController.js';

import authMiddleware from './app/middlewares/auth.js';

const routes = new Router();

//################## PROOF #####################
//Session
routes.post('/proof/session', SessionsController.store);
//################## PROOF #####################

//################## MIDDLEWARE AUTH #####################
routes.use(authMiddleware);
//################## MIDDLEWARE AUTH #####################

//################## AUTH PROOF #####################
//Dashboard
routes.get("/proof/dashboard", DashboardController.index);
//################## AUTH PROOF #####################

export default routes;
