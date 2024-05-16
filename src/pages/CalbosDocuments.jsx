
import React, { useState, useEffect } from 'react';

//components
import DocumentoCalbos     from "components/Document/DocumentoCalbos";

//Manejo de Carga y Error
import Loader     from "components/Loader/Loader";
import ErrorPage  from "components/ErrorPage/ErrorPage"; 


const CalbosDocuments = () => {

    //Variables de Carga
  const [loanding, setLoanding] = useState(false);
  const [error, setError] = useState(null); 
  //Variable de Banner
  const [banner, setBanner] = useState([]);




    const getDocuments = async () => {
        try {
    
          //Se inicializa elcomponente "Cargando"
          setLoanding(true);
    
          // Banner Home -- Petición a la api
          const response = await fetch(`https://casagriprueba.casagri-group.com/api/documentos/obtenerDocumentos`);
          const responseData = await response.json();
          // Verificar si la respuesta contiene un error
          if (responseData.error) {
            throw new Error(responseData.error);
          }
          //Se carga el Banner Home
          setBanner(responseData.data);
    
          //Desactiva el componente "Cargando" y no se carga ningún error 
          setLoanding(false);
          setError(null);
    
        } catch (error) {
          setLoanding(false);
          if (error.message) {
            setError(`${error.message}`);
          } else if (error.request) {
            setError('No se pudo conectar con el servidor');
          } else {
            setError('Error desconocido');
          }
        }
    };


  useEffect(() => {
    document.title= `Información Calbos - Casagri`;
    getDocuments();
  },[])


  



    return (
        <>
         <div style={{ backgroundColor: '#F9F9F9' }}>
            {loanding ? (
              <Loader />
            ) : error ? (
              <ErrorPage message={error} />
            ) : (
              <>
                <DocumentoCalbos DocumentosCalbos={ banner  }/>
              </>
            )}
         </div>
            
        </>
    );
};

export default CalbosDocuments;
