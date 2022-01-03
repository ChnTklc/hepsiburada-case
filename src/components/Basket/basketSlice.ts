import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../commons/interfaces';

export interface IBasketState {
	items: IProduct[];
}

const initialState: IBasketState = {
	items: JSON.parse(localStorage.getItem('basketItems') || '[]') as IProduct[]
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<IProduct>) => {
			state.items.push(action.payload);
			localStorage.setItem('basketItems', JSON.stringify(state.items));
		},
		removeItem: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
			localStorage.setItem('basketItems', JSON.stringify(state.items));
		}
	}
});

export const { addItem, removeItem } = basketSlice.actions;
export default basketSlice.reducer;
