import { Box, TextField, Typography } from '@mui/material';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export default function InputField({ label, value, onChange, type = 'text' }: InputFieldProps) {
  return (
    <Box display="flex" alignItems="center" gap={2} mb={2}>
      <Typography width={150}>{label}</Typography>
      <TextField fullWidth type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </Box>
  );
}
