import { Router } from 'express';

import ConnectionsController from '../controllers/ConnectionsController';

const connectionsRoutes = Router();

const connectionsController = new ConnectionsController();

connectionsRoutes.get('/', connectionsController.index);
connectionsRoutes.post('/', connectionsController.create);

export default connectionsRoutes;
