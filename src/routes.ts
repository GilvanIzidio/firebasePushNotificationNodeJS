import { Router } from 'express';

import SendNotificationController from './controllers/NotificationController/SendNotificationContoller';

const routes = Router();

routes.post('/notification', new SendNotificationController().handle);

export { routes };