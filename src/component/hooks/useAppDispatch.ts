// src/component/hooks/useAppDispatch.ts
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../App/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();