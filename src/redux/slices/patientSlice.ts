
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Patient {
  id: string;
  name: string;
  birthDate: string;
  sex: string;
}

interface PatientState {
  patients: Patient[];
}

const initialState: PatientState = {
  patients: [
    { id: '1', name: 'John Doe', birthDate: '1980-01-01', sex: 'M' },
    { id: '2', name: 'Jane Smith', birthDate: '1975-05-12', sex: 'F' },
  ],
};

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<Patient>) => {
      state.patients.push(action.payload);
    },
  },
});

export const { addPatient } = patientSlice.actions;
export default patientSlice.reducer;
