import { configureStore } from '@reduxjs/toolkit';
import collegeProfileReducer from './slices/collegeProfileSlice';
import { loadState, saveState } from '../utils/localStorage';
import throttle from 'lodash/throttle';
const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    collegeProfile: collegeProfileReducer,
  },
  ...(preloadedState && { preloadedState }),
});

store.subscribe(
  throttle(() => {
    saveState({
      collegeProfile: store.getState().collegeProfile,
    });
  }, 1000)
);
