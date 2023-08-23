import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
    name: 'auth',
    initialState: {
        authed: false,
        userDetails: [],
    },
    reducers: {
        setAuth: (state, action) => {
            state.authed = action.payload;
        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        }
    }
})

export const { setAuth, setUserDetails } = auth.actions;

export default auth.reducer;