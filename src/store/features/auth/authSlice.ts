import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  fullname: string;
  email: string;
  phonenumber: string;
  idnumber: string;
  accountID: string;
  profilePic: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Login User Logic

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    {
      phonenumber,
      password,
    }: {
      phonenumber: string;
      password: string;
    },
    {rejectWithValue},
  ) => {
    try {
      const loginRes = await axios.post(
        'https://allater-sacco-backend.fly.dev/auth/login',
        {phonenumber, password},
      );

      const token = loginRes.data.accessToken;
      if (!token) throw new Error('Token not received');

      const userRes = await axios.get(
        'https://allater-sacco-backend.fly.dev/user/profile',
        {
          headers: {Authorization: `Bearer ${token}`},
        },
      );

      const user = userRes.data;

      await AsyncStorage.setItem('token', token);

      return {token, user};
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Login failed.');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      AsyncStorage.removeItem('token');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
