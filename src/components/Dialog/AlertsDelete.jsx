import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ SetDeleting, Delete }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  useEffect(() => {
    if (Delete) {
      const timeoutId = setTimeout(() => {
        SetDeleting(false);
        window.location.reload();
      }, 2000);

      // Limpia el temporizador si el componente se desmonta antes de que se cumplan los 4 segundos
      return () => clearTimeout(timeoutId);
    }
  }, [Delete]);


  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Usuario Eliminado!
        </Alert>
      </Snackbar>
    </Stack>
  );
}