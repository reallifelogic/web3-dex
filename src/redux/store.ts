import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import { thunk } from 'redux-thunk';
import coinReducer from './reducers/coin.reducer';

const middlewares = [thunk];

const moduleState = {
  coins: coinReducer,
};

const appReducer = combineReducers(moduleState);

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);
