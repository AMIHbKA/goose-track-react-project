import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { themeReducer } from './theme/slice';
import { reviewReducer } from './review/slice';
import thunk from 'redux-thunk';
import { taskReducer } from './tasks/taskSlice';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const reviewPersistConfig = {
  key: 'review',
  storage,
  whitelist: ['token'],
};



export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
    review: persistReducer(reviewPersistConfig, reviewReducer),
    tasks: taskReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    thunk,
  ],
});

export const persistor = persistStore(store);
