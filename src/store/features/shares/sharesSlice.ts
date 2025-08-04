import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '../../store';

interface Shares {
  shareAmount: number;
  noOfSharesBought: number;
  recentTransactions: any[];
}

interface SharesState {
  shares: Shares | null;
  loading: boolean;
  error: string | null;
}

const initialState: SharesState = {
  shares: null,
  loading: false,
  error: null,
};

export const fetchSharesSummary = createAsyncThunk(
  'shares/fetchSharesSummary',
  async (_, {getState, rejectWithValue}) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.token;

      const response = await axios.get(
        'https://allater-sacco-backend.fly.dev/shares/summary',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      //console.log(response.data);
      return response.data;
    } catch (error: any) {
      //console.log(error.response?.data || 'Failed to fetch data');
      return rejectWithValue(error.response?.data || 'Failed to fetch data');
    }
  },
);

const sharesSlice = createSlice({
  name: 'shares',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSharesSummary.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSharesSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.shares = action.payload;
      })
      .addCase(fetchSharesSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default sharesSlice.reducer;
