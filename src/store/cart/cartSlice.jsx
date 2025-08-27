import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems:
		typeof window !== 'undefined'
			? JSON.parse(localStorage.getItem('cartItems')) || []
			: [],
	loading: false,
	error: null,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart: (state, action) => {
			state.cartItems = action.payload;
		},
		addItem: (state, action) => {
			const item = action.payload;
			const existingItem = state.cartItems.find(i => i.id === item.id);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.cartItems.push({ ...item, quantity: 1 });
			}
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter(
				i => i.id !== action.payload
			);
		},
		decreaseQuantity: (state, action) => {
			const item = state.cartItems.find(i => i.id === action.payload);
			if (item) {
				if (item.quantity > 1) {
					item.quantity -= 1;
				} else {
					state.cartItems = state.cartItems.filter(
						i => i.id !== action.payload
					);
				}
			}
		},
		clearCartItems: state => {
			state.cartItems = [];
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const {
	setCart,
	addItem,
	removeItem,
	decreaseQuantity,
	clearCartItems,
	setLoading,
	setError,
} = cartSlice.actions;

export default cartSlice.reducer;
