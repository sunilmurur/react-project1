import { createSlice } from '@reduxjs/toolkit'

// Add cart 
const cartSlice = createSlice({
    name : "Cart",
    initialState:[],
     reducers :{
        addtoCart : (state, action) => {
            const item = action.payload;
            const existingItem = state.find((i) => i.id === item.id);
           
            if (existingItem) {
              existingItem.quantity += 1;
              existingItem.price += item.price;
            } else {
              state.push({ ...item, quantity: 1 });
            }
        },
        removeCart : (state, action) => {
            const idToRemove = action.payload;
            return state.filter(item => item.id !== idToRemove);
        },
     },
})
export const { addtoCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;

