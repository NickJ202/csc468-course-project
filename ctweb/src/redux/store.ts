import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import storage from "redux-persist/lib/storage/session";
import {persistStore, persistReducer} from "redux-persist";

import orgCreateReducer from "./org/reducers";
import eventCreateReducer from "./events/reducers";
 
const persistConfig = {
    key: "root",
    storage
};

const rootReducer = combineReducers({
    orgCreateReducer,
    eventCreateReducer
});

export type RootState = ReturnType<typeof store.getState>
const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const logger = createLogger();


export type AppDispatch = typeof store.dispatch
export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk, logger)
);
export const persistor = persistStore(store);