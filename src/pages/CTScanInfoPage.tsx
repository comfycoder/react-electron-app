import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../redux/store';
import { updateCTScanInfo } from '../redux/slices/dicomSlice';
import InputField from '../components/InputField';
import { Paper, Typography, Button } from '@mui/material';

export default function CTScanInfoPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sliceThickness, kvp } = useSelector((state: RootState) => state.dicom.ctScanInfo);

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>CT Scan Info</Typography>
      <InputField label="Slice Thickness" value={sliceThickness} onChange={(val) => dispatch(updateCTScanInfo({ sliceThickness: val, kvp }))} />
      <InputField label="KVP" value={kvp} onChange={(val) => dispatch(updateCTScanInfo({ sliceThickness, kvp: val }))} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/pet-scan-info')}>
        Next
      </Button>
    </Paper>
  );
}
