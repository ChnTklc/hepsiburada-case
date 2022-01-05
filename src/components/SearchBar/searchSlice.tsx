import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISearchState {
	value: string;
}

const initialState: ISearchState = {
	value: ''
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		}
	}
});

export const { setValue } = searchSlice.actions;
export default searchSlice.reducer;
