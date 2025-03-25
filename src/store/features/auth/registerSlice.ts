import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface RegisterState {
  step: number;
  fullName: string;
  phoneNumber: string;
  idNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: RegisterState = {
  step: 1,
  fullName: '',
  phoneNumber: '',
  idNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    nextStep: state => {
      state.step += 1;
    },

    prevStep: state => {
      state.step -= 1;
    },

    updatedField: (
      state,
      action: PayloadAction<{field: string; value: string}>,
    ) => {
      const field = action.payload.field as keyof RegisterState;
      if (field in state) {
        (state[field] as string) = action.payload.value;
      }
    },
    resetForm: () => initialState,
  },
});

export const {nextStep, prevStep, updatedField, resetForm} =
  registerSlice.actions;
export default registerSlice.reducer;
