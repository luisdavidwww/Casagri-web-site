import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';
import { colors } from '@mui/material';

const minDistance = 10;

export default function FormTextFields() {


  const PrettoSlider = styled(Slider)({
    color: '#47A01A',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });


  const marks = [
    {
      value: 0,
      label: '0$',
    },
    {
      value: 100,
      label: '100$',
    },
  ];

  const [value, setValue] = React.useState(30);

  const Input = styled(MuiInput)`
  width: 42px;
`;

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 2500) {
      setValue(2500);
    }
  };











  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      /*sx={{ width: 210 }}*/
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
{/*
      <Slider
        value={typeof value === 'number' ? value : 0}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        marks={marks}

      />

      <Input
          value={value}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
      />
*/}
    </Box>

  );
}