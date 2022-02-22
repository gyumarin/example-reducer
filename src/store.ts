import {applyMiddleware, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import logger from 'redux-logger';
import {rootEpic, rootReducer} from './reducerEpics';

//createEpicMiddleware(): is used to create an instance of the actual redux-observable middleware.
//                        실제 redux 관찰 가능 미들웨어의 인스턴스를 만드는 데 사용

const epicMiddleware = createEpicMiddleware();

import {combineReducers} from 'redux';
const store = createStore(
  combineReducers({rootReducer}),
  applyMiddleware(epicMiddleware, logger),
  // applyMiddleware(epicMiddleware),
);

export type RootState = ReturnType<typeof store.getState>;

epicMiddleware.run(rootEpic);

export default store;
