import { Router } from 'express';

import ClassesController from '../controllers/ClassesController';

import ensureAuthenticated from '../middlewares/ensureAuthenticate';

const classesRoutes = Router();

classesRoutes.use(ensureAuthenticated);

const classesController = new ClassesController();

classesRoutes.get('/', classesController.index);
classesRoutes.post('/', classesController.create);

export default classesRoutes;
