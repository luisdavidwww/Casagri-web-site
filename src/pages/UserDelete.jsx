
import React, { useState, useEffect } from 'react';
import AlertDialog from '../components/Dialog/AlertDialog';
import AlertsDelete from '../components/Dialog/AlertsDelete';
import FormUserDelete from '../components/UserDelete/FormUserDelete';

const UserDelete = ({ userId }) => {

    //Estado Base para mensaje
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


    useEffect(() => {
        document.title= `Eliminar Usuario`
      },[])

    return (
        <div className='Container__Main'>
            <div style={{  paddingTop: "5rem", paddingBottom:'5rem' }}>
                <FormUserDelete onOpen={handleAlertDialogOpen} Delete={isDeleting} />
            </div>

            <AlertDialog
                open={alertDialogOpen}
                onClose={handleAlertDialogClose}
                onLogout={"algo"}
                SetDeleting={setDeleting}
            />
            {
                isDeleting ? (<AlertsDelete SetDeleting={setDeleting} Delete={isDeleting} />): null
            };
        </div>
    );
};

export default UserDelete;
