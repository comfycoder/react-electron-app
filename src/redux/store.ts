import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './slices/patientSlice';
import dicomReducer from './slices/dicomSlice';

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    dicom: dicomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
