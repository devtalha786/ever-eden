import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cartReducer from './cart/cartSlice';

const rootReducer = combineReducers({
	cart: cartReducer,
});

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
