
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ textAlign: 'center', p: 2, mt: 4 }}>
      <Typography variant="body2" color="textSecondary">
        © 2025 DICOM UI
      </Typography>
    </Box>
  );
}
