import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface PasswordState {
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: PasswordState = {
  loading: false,
  error: null,
  message: null,
};

export const forgotPassword = createAsyncThunk(
  'password/forgotPassword',
  async (email: string, {rejectWithValue}) => {
    try {
      const res = await axios.post(
        'https://allater-sacco-backend.fly.dev/auth/forgot-password',
        {email},
      );
      return res.data.message;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || 'Failed to send reset code.',
      );
    }
  },
);

export const resetPassword = createAsyncThunk(
  'password/resetPassword',
  async (
    {token, newpassword}: {token: string; newpassword: string},
    {rejectWithValue},
  ) => {
    try {
      const res = await axios.post(
        'https://allater-sacco-backend.fly.dev/auth/reset-password',
        {token, newpassword},
      );
      return res.data.message;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || 'Failed to reset password.',
      );
    }
  },
);

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    clearPasswordError(state) {
      state.error = null;
    },
    clearPasswordMessage(state) {
      state.message = null;
    },
  },
  extraReducers: builder => {
    builder
      //Forgot Password
      .addCase(forgotPassword.pending, state => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      //Reset Password
      .addCase(resetPassword.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {clearPasswordError, clearPasswordMessage} = passwordSlice.actions;

export default passwordSlice.reducer;
