import { configureStore } from '@reduxjs/toolkit';
import scoresReducer from './features/scoresSlice';

export const store = configureStore({
  reducer: {
    scores: scoresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
