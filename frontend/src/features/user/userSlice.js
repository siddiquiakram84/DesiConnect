import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  gender: '',
  age: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { name, gender, age } = action.payload;
      state.name = name;
      state.gender = gender;
      state.age = age;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.name = '';
      state.gender = '';
      state.age = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
