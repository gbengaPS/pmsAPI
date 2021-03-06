import { Router } from 'express';
import { UsersController, LocationsController } from './controllers';
import {
  sendValidationErrors,
  verifyToken,
  verifyParentLocation,
  protectRouteForAdmin,
} from './middleware';
import { routesValidations } from './utils';

const routes = Router();

routes.get(
  '/locations',
  routesValidations.getAllLocation,
  sendValidationErrors,
  verifyToken,
  LocationsController.getAll,
);

routes.post(
  '/user',
  routesValidations.createAccount,
  sendValidationErrors,
  UsersController.create,
);

routes.post(
  '/user/login',
  routesValidations.login,
  sendValidationErrors,
  UsersController.login,
);

routes.post(
  '/location',
  routesValidations.createLocation,
  sendValidationErrors,
  verifyToken,
  verifyParentLocation,
  LocationsController.create,
);

routes.patch(
  '/location/:id',
  routesValidations.updateLocation,
  sendValidationErrors,
  verifyToken,
  LocationsController.updateLocation,
);

routes.delete(
  '/location/:id',
  routesValidations.deleteLocation,
  sendValidationErrors,
  verifyToken,
  protectRouteForAdmin,
  LocationsController.deleteLocation,
);
export default routes;
