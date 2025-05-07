import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
  id: string;
  fullname: string;
  email: string;
  phonenumber: string;
  idnumber: string;
  profilePic: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{token: string; user: User}>,
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout: state => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;
