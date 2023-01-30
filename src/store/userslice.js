import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  miAddress: "",
  miEmail: "",
  miId: "",
  miNickname: "",
  miPhone: "",
  miPwd: "",
  miSeq: "",
  miStatus: 1,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.miAddress = action.payload.miAddress;
      state.miEmail = action.payload.miEmail;
      state.miId = action.payload.miId;
      state.miNickname = action.payload.miNickname;
      state.miPhone = action.payload.miPhone;
      state.miPwd = action.payload.miPwd;
      state.miSeq = action.payload.miSeq;
      state.miStatus = action.payload.miStatus;
    },
    logout: (state) => {
      state.miAddress = "";
      state.miEmail = "";
      state.miId = "";
      state.miNickname = "";
      state.miPhone = "";
      state.miPwd = "";
      state.miSeq = "";
      state.miStatus = 1;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;