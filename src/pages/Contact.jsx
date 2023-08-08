import React, { useState, useEffect } from 'react'

//Componentes
import { BannerMain } from 'components/BannerMain/BannerMain';
import ContactSection from 'components/Home/Contact/ContactSection';
import Companys from 'components/Contact/Companys';

//Manejo de Carga y Error
import Loader     from "components/Loader/Loader";
import ErrorPage  from "components/ErrorPage/ErrorPage"; 

//Peticiones
import { BANNERS } from '../routers/index';


export const Contact = () => {


  const [error, setError] = useState(null);
  const [loanding, setLoanding] = useState(false);
  const [banner, setBanner] = useState([]);


  const getBannerContact = async () => {
    try {

      //Se inicializa elcomponente "Cargando"
      setLoanding(true);

      // Banner Home -- Petición a la api
      const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${'Contácto'}`);
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
    document.title= `Contacto - Casagri`
    getBannerContact();
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
          <BannerMain image={ banner.banner__desktop } imageMini={ banner.banner__movil } /> 
          {/*<Location/>*/}
          <Companys/>
          <ContactSection/>
        </>
      )}
    </div>
    </>
  )
}
