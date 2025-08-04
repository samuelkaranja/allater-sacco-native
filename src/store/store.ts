import {configureStore} from '@reduxjs/toolkit';
import registerReducer from './features/auth/registerSlice';
import passwordReducer from './features/auth/passwordSlice';
import authReducer from './features/auth/authSlice';
import overviewReducer from './slices/overviewSlice';
import nextOfKinReducer from './features/nextOfKin/nextOfKinSlice';
import savingsReducer from './features/savings/savingsSlice';
import sharesReducer from './features/shares/sharesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    password: passwordReducer,
    register: registerReducer,
    overview: overviewReducer,
    nextOfKin: nextOfKinReducer,
    savings: savingsReducer,
    shares: sharesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
