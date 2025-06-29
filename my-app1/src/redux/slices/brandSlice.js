import {createSlice} from '@reduxjs/toolkit'

const brandSlice = createSlice({
name:'Brand',
initialState:{brand:''},
reducers:{
    setBrand : (state,action) => {
        state.brand = [...state.brand,action.payload]
    },

},
})
export const { setBrand  } = brandSlice.actions;
export default brandSlice.reducer;