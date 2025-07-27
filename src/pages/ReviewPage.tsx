import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { Paper, Typography, Box } from '@mui/material';

export default function ReviewPage() {
  const dicom = useSelector((state: RootState) => state.dicom);

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>Review Summary</Typography>
      <Box mt={2}>
        <Typography variant="subtitle1"><strong>Patient:</strong> {dicom.patientPI.name}, {dicom.patientPI.dob}, {dicom.patientPI.sex}</Typography>
        <Typography variant="subtitle1"><strong>Study:</strong> {dicom.studyInfo.studyId} - {dicom.studyInfo.description}</Typography>
        <Typography variant="subtitle1"><strong>Exam:</strong> {dicom.examInfo.examType} at {dicom.examInfo.location}</Typography>
        <Typography variant="subtitle1"><strong>CT Scan:</strong> Thickness {dicom.ctScanInfo.sliceThickness}, KVP {dicom.ctScanInfo.kvp}</Typography>
        <Typography variant="subtitle1"><strong>PET Scan:</strong> Tracer {dicom.petScanInfo.tracer}, Dose {dicom.petScanInfo.dose}</Typography>
      </Box>
    </Paper>
  );
}
