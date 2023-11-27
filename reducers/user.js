import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { email: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addEmail: (state, action) => {
      state.value.email = action.payload;
    },
  },
});

export const { addEmail } = userSlice.actions;
export default userSlice.reducer;
