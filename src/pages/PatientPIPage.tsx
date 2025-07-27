import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../redux/store';
import { updatePatientPI } from '../redux/slices/dicomSlice';
import InputField from '../components/InputField';
import { Paper, Typography, Button } from '@mui/material';

export default function PatientPIPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, dob, sex } = useSelector((state: RootState) => state.dicom.patientPI);

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>Patient PI</Typography>
      <InputField label="Name" value={name} onChange={(val) => dispatch(updatePatientPI({ name: val, dob, sex }))} />
      <InputField label="Date of Birth" value={dob} type="date" onChange={(val) => dispatch(updatePatientPI({ name, dob: val, sex }))} />
      <InputField label="Sex" value={sex} onChange={(val) => dispatch(updatePatientPI({ name, dob, sex: val }))} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/study-info')}>
        Next
      </Button>
    </Paper>
  );
}
