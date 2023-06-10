
import React from 'react';
import { Box, Card, Paper, Stack, Typography } from '@mui/material';

const RegisterForm = () => {
  return (

    <Paper elevation={3}>
      <Card>
        <Box sx={{ padding: "20px", width: "50%" }}>
          <Stack>
            <Typography variant='h3'>Registro</Typography>
          </Stack>
        </Box>
      </Card>
    </Paper>

  );
};

export default RegisterForm;