import { createStore, compose } from 'redux';
import reducer from './reducer';

import middlewares from './middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
