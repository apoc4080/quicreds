import { createSlice } from '@reduxjs/toolkit';

const link = createSlice({
    name: 'link',
    initialState: {
        URL: 'https://onetap-admin.com/back',
        URI: '',
    },
    reducers: {
        
    }
})

// export const {  } = link.actions;

export default link.reducer;