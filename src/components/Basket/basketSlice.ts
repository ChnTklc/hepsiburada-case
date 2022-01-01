import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../commons/interfaces';

export interface IBasketState {
	items: IProduct[];
}

const initialState: IBasketState = {
	items: []
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<IProduct>) => void state.items.push(action.payload),
		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		}
	}
});

export const { addItem, removeItem } = basketSlice.actions;
export default basketSlice.reducer;
