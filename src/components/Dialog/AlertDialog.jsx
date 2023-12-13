import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ open, onClose, onLogout }) {

  useEffect(() => {
    // Cuando la prop 'open' cambia, actualiza el estado local 'isOpen'
    // para mantenerlo sincronizado con la prop del padre
    setIsOpen(open);
  }, [open]);

  const [isOpen, setIsOpen] = React.useState(open);

  const handleClose = () => {
    setIsOpen(false);
    onClose(); // Llama a la función de retorno onClose del padre
  };

  const handleLogout = () => {
    setIsOpen(false);
    window.location.reload(); // Llama a la función de retorno onLogout del padre
  };

  return (
    <div style={{ backgroundColor: "#1d1f23" }} >
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ fontWeight: "500", color:'black' }}>
          {"¿Seguro que quiere eliminar permanentemente tu cuenta?"}
        </DialogTitle>

        <DialogActions>
          <MenuItem onClick={handleClose}>No</MenuItem>
          <MenuItem onClick={handleLogout} autoFocus>
            Si
          </MenuItem>
        </DialogActions>
      </Dialog>
    </div>
  );
}

