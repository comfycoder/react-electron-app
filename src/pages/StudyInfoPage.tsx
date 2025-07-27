import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../redux/store';
import { updateStudyInfo } from '../redux/slices/dicomSlice';
import InputField from '../components/InputField';
import { Paper, Typography, Button } from '@mui/material';

export default function StudyInfoPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { studyId, description } = useSelector((state: RootState) => state.dicom.studyInfo);

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>Study Info</Typography>
      <InputField label="Study ID" value={studyId} onChange={(val) => dispatch(updateStudyInfo({ studyId: val, description }))} />
      <InputField label="Description" value={description} onChange={(val) => dispatch(updateStudyInfo({ studyId, description: val }))} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/exam-info')}>
        Next
      </Button>
    </Paper>
  );
}
