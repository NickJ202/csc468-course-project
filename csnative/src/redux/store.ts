import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import userReducer from './user/reducers';

const rootReducer = combineReducers({
    userReducer,
});

const logger = createLogger();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);