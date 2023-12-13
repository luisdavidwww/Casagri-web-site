
import React, { useState } from 'react';
import AlertDialog from '../components/Dialog/AlertDialog';
import FormUserDelete from '../components/UserDelete/FormUserDelete';

const UserDelete = ({ userId }) => {

    //Estado Base para eliminar Usuario
    const [isDeleting, setDeleting] = useState(false);
    //Estado de laventana de dialogo
    const [alertDialogOpen, setAlertDialogOpen] = useState(false);


    //Metodo para Abrir la ventana de dialogo
    const handleAlertDialogOpen = () => {
        setAlertDialogOpen(true);
    };

    //Metodo para Cerrar la ventana de Dialogo
    const handleAlertDialogClose = () => {
        setAlertDialogOpen(false);
    };

    return (
        <div className='Container__Main'>
            <div style={{  paddingTop: "5rem", paddingBottom:'5rem' }}>
                <FormUserDelete onOpen={handleAlertDialogOpen} />
            </div>
            <AlertDialog
                open={alertDialogOpen}
                onClose={handleAlertDialogClose}
                onLogout={"algo"}
            />
        </div>
    );
};

export default UserDelete;
