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
          label="Mínimo"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          style={{marginBottom:'10px'}}

        />
        <TextField
          id="filled-number"
          label="Máximo"
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