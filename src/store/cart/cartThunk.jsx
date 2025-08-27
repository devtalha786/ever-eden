import {
	setCart,
	addItem,
	removeItem,
	decreaseQuantity,
	clearCartItems,
	setLoading,
	setError,
} from './cartSlice';

// 🟢 Load cart from localStorage
export const loadCart = () => async dispatch => {
	try {
		dispatch(setLoading(true));
		const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
		dispatch(setCart(savedCart));
		dispatch(setLoading(false));
	} catch (error) {
		dispatch(setError(error.message));
		dispatch(setLoading(false));
	}
};

// 🟢 Add to cart
export const addToCart = product => async (dispatch, getState) => {
	try {
		dispatch(addItem(product));
		const { cart } = getState();
		localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
	} catch (error) {
		dispatch(setError(error.message));
	}
};

// 🟢 Remove from cart
export const removeFromCart = id => async (dispatch, getState) => {
	try {
		dispatch(removeItem(id));
		const { cart } = getState();
		localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
	} catch (error) {
		dispatch(setError(error.message));
	}
};

// 🟢 Decrease quantity
export const decreaseCartQuantity = id => async (dispatch, getState) => {
	try {
		dispatch(decreaseQuantity(id));
		const { cart } = getState();
		localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
	} catch (error) {
		dispatch(setError(error.message));
	}
};

// 🟢 Clear entire cart
export const clearCart = () => async dispatch => {
	try {
		dispatch(clearCartItems());
		localStorage.setItem('cartItems', JSON.stringify([]));
	} catch (error) {
		dispatch(setError(error.message));
	}
};
