import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
      user: null,
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      login: (state, action) => {
        state.user = action.payload.user;
        console.log("This is from player slice", action.payload.user);
      },
      logout: (state) => {
        state.user = null;
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { login, logout } = playerSlice.actions
  
  export default playerSlice.reducer