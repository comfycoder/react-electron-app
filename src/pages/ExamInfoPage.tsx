import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../redux/store';
import { updateExamInfo } from '../redux/slices/dicomSlice';
import InputField from '../components/InputField';
import { Paper, Typography, Button } from '@mui/material';

export default function ExamInfoPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { examType, location } = useSelector((state: RootState) => state.dicom.examInfo);

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>Exam Info</Typography>
      <InputField label="Exam Type" value={examType} onChange={(val) => dispatch(updateExamInfo({ examType: val, location }))} />
      <InputField label="Location" value={location} onChange={(val) => dispatch(updateExamInfo({ examType, location: val }))} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/ct-scan-info')}>
        Next
      </Button>
    </Paper>
  );
}
