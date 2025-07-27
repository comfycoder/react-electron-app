import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../redux/store';
import { updatePETScanInfo } from '../redux/slices/dicomSlice';
import InputField from '../components/InputField';
import { Paper, Typography, Button } from '@mui/material';

export default function PETScanInfoPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tracer, dose } = useSelector((state: RootState) => state.dicom.petScanInfo);

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>PET Scan Info</Typography>
      <InputField label="Tracer" value={tracer} onChange={(val) => dispatch(updatePETScanInfo({ tracer: val, dose }))} />
      <InputField label="Dose" value={dose} onChange={(val) => dispatch(updatePETScanInfo({ tracer, dose: val }))} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/review')}>
        Next
      </Button>
    </Paper>
  );
}
