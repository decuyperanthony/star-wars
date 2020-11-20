import { applyMiddleware } from 'redux';

import routesMW from './routes';
import auth from './auth';

export default applyMiddleware(
  routesMW,
  auth,
);
