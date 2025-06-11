import { collegeProfileSlice } from './slices/collegeProfileSlice';

export type RootState = {
  collegeProfile: ReturnType<typeof collegeProfileSlice.reducer>;
};

export type AppDispatch = typeof import('./index').store.dispatch;
