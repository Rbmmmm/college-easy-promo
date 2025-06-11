import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
