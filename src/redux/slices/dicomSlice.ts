import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PatientPI {
  name: string;
  dob: string;
  sex: string;
}

export interface StudyInfo {
  studyId: string;
  description: string;
}

export interface ExamInfo {
  examType: string;
  location: string;
}

export interface CTScanInfo {
  sliceThickness: string;
  kvp: string;
}

export interface PETScanInfo {
  tracer: string;
  dose: string;
}

interface DicomState {
  patientPI: PatientPI;
  studyInfo: StudyInfo;
  examInfo: ExamInfo;
  ctScanInfo: CTScanInfo;
  petScanInfo: PETScanInfo;
}

const initialState: DicomState = {
  patientPI: { name: '', dob: '', sex: '' },
  studyInfo: { studyId: '', description: '' },
  examInfo: { examType: '', location: '' },
  ctScanInfo: { sliceThickness: '', kvp: '' },
  petScanInfo: { tracer: '', dose: '' },
};

const dicomSlice = createSlice({
  name: 'dicom',
  initialState,
  reducers: {
    updatePatientPI(state, action: PayloadAction<PatientPI>) {
      state.patientPI = action.payload;
    },
    updateStudyInfo(state, action: PayloadAction<StudyInfo>) {
      state.studyInfo = action.payload;
    },
    updateExamInfo(state, action: PayloadAction<ExamInfo>) {
      state.examInfo = action.payload;
    },
    updateCTScanInfo(state, action: PayloadAction<CTScanInfo>) {
      state.ctScanInfo = action.payload;
    },
    updatePETScanInfo(state, action: PayloadAction<PETScanInfo>) {
      state.petScanInfo = action.payload;
    },
  },
});

export const {
  updatePatientPI,
  updateStudyInfo,
  updateExamInfo,
  updateCTScanInfo,
  updatePETScanInfo,
} = dicomSlice.actions;

export default dicomSlice.reducer;
