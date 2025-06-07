import {configureStore} from '@reduxjs/toolkit';
import registerReducer from './features/auth/registerSlice';
import authReducer from './features/auth/authSlice';
import overviewReducer from './slices/overviewSlice';
import nextOfKinReducer from './features/nextOfKin/nextOfKinSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    overview: overviewReducer,
    nextOfKin: nextOfKinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
