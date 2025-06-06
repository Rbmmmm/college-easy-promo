import { configureStore } from '@reduxjs/toolkit';
import collegeProfileReducer from './slices/collegeProfileSlice';

export const store = configureStore({
  reducer: {
    collegeProfile: collegeProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
