import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import basketReducer from '../components/Basket/basketSlice';
import hcAPI from './hcAPI';

export const store = configureStore({
	reducer: {
		[hcAPI.reducerPath]: hcAPI.reducer,
		basket: basketReducer
	},
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hcAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
