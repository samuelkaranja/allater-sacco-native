import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import axios from 'axios';

export type NextOfKinData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
};

type NextOfKinState = {
  loading: boolean;
  error: string | null;
  success: boolean;
};

const initialState: NextOfKinState = {
  loading: false,
  error: null,
  success: false,
};

export const addNextOfKin = createAsyncThunk<
  void,
  NextOfKinData,
  {state: RootState; rejectValue: string}
>('nextOfKin/addNextOfKin', async (data, {getState, rejectWithValue}) => {
  try {
    const token = getState().auth.token;
    console.log('Token', token);
    const response = await axios.patch(
      'https://allater-sacco-backend.fly.dev/profile/nextofkin',
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    console.log('Response from backend:', response.data);

    return;
  } catch (error: any) {
    console.error(
      'Add NextOfKin error:',
      error.response?.data || error.message,
    );

    return rejectWithValue(
      error.response?.data?.message || 'Something went wrong',
    );
  }
});

const nextOfKinSlice = createSlice({
  name: 'nextOfKin',
  initialState,
  reducers: {
    resetNextOfKinState: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(addNextOfKin.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addNextOfKin.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(addNextOfKin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to submit';
        state.success = false;
      });
  },
});

export const {resetNextOfKinState} = nextOfKinSlice.actions;

export default nextOfKinSlice.reducer;
