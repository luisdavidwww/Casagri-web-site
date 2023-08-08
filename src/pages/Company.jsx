import React, { useState, useEffect } from 'react';

//componentes  
import { BannerMain } from 'components/BannerMain/BannerMain';
import AboutUs from 'components/Company/AboutUs';
import CorporatePolicy from 'components/Company/CorporatePolicy';
import Trayectory from 'components/Company/Trayectory';
import NationalMomentum from 'components/Company/NationalMomentum';
import BrandsCarrousel from "components/Company/BrandsCarrousel";

//Manejo de Carga y Error
import Loader     from "components/Loader/Loader";
import ErrorPage  from "components/ErrorPage/ErrorPage"; 

// Peticiones
import { BANNERS } from '../routers/index';



export const Company = () => {

  //Variables de Carga
  const [loanding, setLoanding] = useState(false);
  const [error, setError] = useState(null); 
  //Variable de Banner
  const [banner, setBanner] = useState([]);


  //Peticion del Banner Principal
  const getBannerCompany = async () => {
    try {

      //Se inicializa elcomponente "Cargando"
      setLoanding(true);

      // Banner Home -- Petición a la api
      const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${'Empresa'}`);
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
    document.title= `Empresa - Casagri`
    getBannerCompany();
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
          <AboutUs component="AboutUs"/>
          <CorporatePolicy component="CorporatePolicy"/>
          <Trayectory component="Trayectory"/>
          <NationalMomentum component="NationalMomentum"/>
          <BrandsCarrousel/>
        </>
      )}
    </div>
    </>
  )
}
