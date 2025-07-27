import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">DICOM UI Viewer</Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={RouterLink} to="/">Patient PI</Button>
          <Button color="inherit" component={RouterLink} to="/study-info">Study Info</Button>
          <Button color="inherit" component={RouterLink} to="/exam-info">Exam Info</Button>
          <Button color="inherit" component={RouterLink} to="/ct-scan-info">CT Scan</Button>
          <Button color="inherit" component={RouterLink} to="/pet-scan-info">PET Scan</Button>
          <Button color="inherit" component={RouterLink} to="/review">Review</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
