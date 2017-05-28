import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';


const middlewares = [thunk];

// if (process.env.NODE_ENV !== 'production') {
//   const logger = createLogger();
//   middlewares.push(logger);
// }

const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(...middlewares))

);

export default configureStore;
