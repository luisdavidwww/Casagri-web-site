
import React, { useState, useEffect } from 'react';

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
            <div className='CorporatePolicy__container'>
                <div className='AboutUs__title__Container'>
                    <h1 className='AboutUs__title'> Descargables <span style={{color:'#489B1E'}}> Calbos </span> </h1>
                </div>

                {banner?.map((item, index) => (
                    <li className='cards__item-pc' key={`${"component"}-${index}`}>
                        <div className=''  >
                            <div className='' data-aos="flip-right" data-aos-once="true" data-aos-duration="1200">
                                <h1>{item.nombre}</h1>
                                <a href={item.enlaceDescarga}> Descargar </a>
                            </div>  
                        </div>
                    </li>
                ))}
            </div>
        </>
    );
};

export default CalbosDocuments;
