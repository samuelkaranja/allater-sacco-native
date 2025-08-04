import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '../../store';

// Types
interface SavingTransaction {
  id: string;
  amount: number;
  phoneNumber: string;
  status: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

interface SavingsSummary {
  balance: number;
  recentTransactions: SavingTransaction[];
}

interface SavingsState {
  balance: number;
  recentTransactions: SavingTransaction[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: SavingsState = {
  balance: 0,
  recentTransactions: [],
  loading: false,
  error: null,
};

export const fetchSavingsSummary = createAsyncThunk<
  SavingsSummary,
  void,
  {state: RootState}
>('savings, fetchSavingsSummary', async (_, {getState, rejectWithValue}) => {
  try {
    const token = getState().auth.token;
    const response = await axios.get(
      'https://allater-sacco-backend.fly.dev/savings/summary',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data as SavingsSummary;
  } catch (error: any) {
    console.error(
      'Error fetching savings summary:',
      error.response?.data || error.message,
    );
    return rejectWithValue(
      error.response?.data?.message || 'Failed to fetch savings summary',
    );
  }
});

const savingsSlice = createSlice({
  name: 'savings',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSavingsSummary.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSavingsSummary.fulfilled,
        (state, action: PayloadAction<SavingsSummary>) => {
          state.loading = false;
          state.balance = action.payload.balance;
          state.recentTransactions = action.payload.recentTransactions;
        },
      )
      .addCase(fetchSavingsSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default savingsSlice.reducer;
