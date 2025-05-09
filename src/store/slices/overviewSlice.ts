import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import axios from 'axios';

interface Transaction {
  amount: number;
  status: string;
  type: string;
  createdAt: string;
}

interface OverviewState {
  pagination: number;
  savings: number;
  shares: number;
  loan: number;
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

const initialState: OverviewState = {
  pagination: 1,
  savings: 0,
  shares: 0,
  loan: 0,
  transactions: [],
  loading: false,
  error: null,
};

// Fetch user overview data
export const fetchUserOverview = createAsyncThunk(
  'overview/fetchUserOverview',
  async (_, {getState, rejectWithValue}) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.token;

      const response = await axios.get(
        'https://allater-sacco-backend.onrender.com/user/overview?page=1',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch data');
    }
  },
);

const overviewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserOverview.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserOverview.fulfilled, (state, action) => {
        state.loading = false;
        state.savings = action.payload.savings;
        state.shares = action.payload.shares;
        state.loan = action.payload.loan;
        state.transactions = action.payload.transactions;
      })
      .addCase(fetchUserOverview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default overviewSlice.reducer;
