import { Router } from 'express';
import SessionController from '../controllers/SessionController';

const sessionsRoutes = Router();

const sessionsController = new SessionController();

sessionsRoutes.post('/', sessionsController.create);

export default sessionsRoutes;
