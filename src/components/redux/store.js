import { applyMiddleware, createStore } from 'redux';
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist"
import logger from 'redux-logger';

const middlewares = [logger]
export const store = createStore( rootReducer,
   applyMiddleware(...middlewares)
    )
export const persistor = persistStore(store);