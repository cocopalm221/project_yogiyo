import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  miSeq:"",
  miId: "",
  miPwd: "",
  miEmail: "",
  miPhone: "",
  miNickname: "",
  miAddress: "",
  miStatus: 1,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.miSeq = action.payload.miSeq;
      state.miId = action.payload.miId;
      state.miPwd = action.payload.miPwd; 
      state.miEmail = action.payload.miEmail;
      state.miPhone = action.payload.miPhone;
      state.miNickname = action.payload.miNickname;
      state.miAddress = action.payload.miAddress;
      state.miStatus = action.payload.miStatus;
    },
    
    logout: (state) => {
      state.miAddress = null;
      state.miEmail = null;
      state.miId = null;
      state.miNickname = null;
      state.miPhone = null;
      state.miPwd = null;
      state.miSeq = null;
      state.miStatus = 1;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice;