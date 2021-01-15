import { Router } from 'express';

import classesRoutes from './classes.routes';
import connectionsRoutes from './connections.routes';
import sessionsRoutes from './sessions.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use('/classes', classesRoutes);
routes.use('/connections', connectionsRoutes);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
