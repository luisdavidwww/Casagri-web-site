import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormTextFields() {
  return (
    <Box
      component="form"

      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-number"
          label="Desde"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          style={{marginBottom:'10px'}}

        />
        <TextField
          id="filled-number"
          label="Hasta"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"

        />
      </div>

    </Box>
  );
}