// src/component/hooks/useAppSelector.ts
import { useSelector } from 'react-redux';
import type { RootState } from '../App/store';

export const useAppSelector = useSelector.withTypes<RootState>();