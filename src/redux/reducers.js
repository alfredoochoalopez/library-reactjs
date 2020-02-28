import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import libraryReducer from "./library/library.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['library']
};

const rootReducer = combineReducers({
    library: libraryReducer
});

export default persistReducer(persistConfig, rootReducer);