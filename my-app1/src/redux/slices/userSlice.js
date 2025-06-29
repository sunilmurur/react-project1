import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


export const  getUser = createAsyncThunk('user/getUser',async(userId,thunkAPI) => {
    try{
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        return await user.json();
    }
    catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
}
);


const userSlice = createSlice({
    name : 'user',
    initialState: {
        user:null,
        loading:false,
        error:null,
    },
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(getUser.pending,(state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(getUser.fulfilled, (state,action) => {
            state.loading = false;
            console.log(action)
            state.user = action.payload;
        })
        .addCase(getUser.rejected,(state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },

})
export default userSlice.reducer
