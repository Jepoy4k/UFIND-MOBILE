import { createSlice } from "@reduxjs/toolkit";

const initialStatevalue = {
  username: "User1",
  email: "example@example.com",
  password: "@Userpass1",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: [initialStatevalue]},
  reducers: {
    register: (state, action) => {
      state.value.push(action.payload);
    },

    login: (state, action) => {
        state.value = state.value.map( user => {
            if (user.username === action.payload.username) {
                return {...user, isLoggedIn: true};
                
            }
            return user;
        })  
    },
  },
});

export const { login, register } = userSlice.actions;

export default userSlice.reducer;
