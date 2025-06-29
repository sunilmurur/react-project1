import { configureStore } from '@reduxjs/toolkit'
import cartRedcer from './slices/cartSlice'
import brandRedcer from './slices/brandSlice'
import  counterReducer  from './slices/counter.slice';
import { loadState, saveState } from '../utils/localStorage';  
import  userReducer   from './slices/userSlice';

// Load from localStorage on startup
const preloadedState = loadState();
export const store = configureStore({
    reducer : {
        cart : cartRedcer,
        brand : brandRedcer,
        counter: counterReducer,
        user: userReducer,
    },
    preloadedState, // use persisted state if available
});



// Save to localStorage on every change
store.subscribe(() => {
    saveState(store.getState());
  });
