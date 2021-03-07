import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { RootState, AppDispatch } from '../store/config'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppDispatch, useAppSelector }
