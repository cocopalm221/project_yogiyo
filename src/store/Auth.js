import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 800*1000;

export const tokenSlice = createSlice({
  name: 'authToken',
  initialState: {
      authenticated: false,
      accessToken: null,
      expireTime: null
  },
  reducers: {
      SET_TOKEN: (state, action) => {
          state.authenticated = true;
          state.accessToken = action.payload;
          state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
      },
      DELETE_TOKEN: (state) => {
          state.authenticated = false;
          state.accessToken = null;
          state.expireTime = null
      },
  }
})

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;



// export const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//       user: null,
//       token:null
//     },
//     reducers: {
//       setCredential: (state, action) => {
//         const {user, accessToken} = action.payload
//         state.user = user;
//         state.token = accessToken;
//       },
//       logout: (state, action) => {
//         state.user = null;
//         state.token = null;
//       },
//     },
//   });
  
  
//   export const { setCredential, logout } = userSlice.actions;
  
//   export const selectCurrentUser = (state) => state.auth.user;
//   export const selectCurrentToken = (state) => state.auth.token;
  
//   export default userSlice.reducer;