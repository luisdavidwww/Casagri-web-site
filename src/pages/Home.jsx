import React, { useState, useEffect } from 'react';

//Componentes Principales
import  FeaturedProducts        from 'components/Cards/FeaturedProducts';
import  RecommendedProducts     from 'components/Cards/RecommendedProducts';
import  AboutUsHome             from 'components/Home/AboutUsHome';
import { CarruselCatalogue }    from 'components/Home/CarruselCatalogue';
import  NewSection              from 'components/NewsCards/NewSection';
import  BannerCarrousel         from 'components/BannerMain/BannerCarrousel';
import  CarruselMain            from 'components/CarruselHomeMain/CarruselMain';
import ContactSection           from 'components/Home/Contact/ContactSection';

//Manejo de Carga y Error
import Loader     from "components/Loader/Loader";
import ErrorPage  from "components/ErrorPage/ErrorPage"; 

// Peticiones
import { BANNERSPUBLICIDAD, BANNERSHOME } from '../routers/index';




export const Home = () => {

  //Variables de Carga
  const [loanding, setLoanding] = useState(false);
  const [error, setError] = useState(null); 
  //Variables de Banners
  const [bannerHome, setBannerHome] = useState([]);
  

  //Peticion principal Banners
  const getBannerHome = async () => {
    try {

      //Se inicializa elcomponente "Cargando"
      setLoanding(true);

      // Banner Home -- Petición a la api
      const respon = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${BANNERSHOME}`);
      const responseData = await respon.json();
      // Verificar si la respuesta contiene un error
      if (responseData.error) {
        throw new Error(responseData.error);
      }
      //Se carga el Banner Home
      setBannerHome(responseData.data);

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
    getBannerHome();
  },[])


  return (
    <div style={{ backgroundColor: '#F9F9F9' }}>
      {loanding ? (
        <Loader />
      ) : error ? (
        <ErrorPage message={error} />
      ) : (
        <>
            <CarruselMain banner={bannerHome} component={"CarruselMain"} />
            <AboutUsHome/>
            <CarruselCatalogue component="CarruselCatalogue"/>
            <FeaturedProducts component="FeaturedProducts"/>
            <BannerCarrousel  component={"BannerCarrousel"} />
            <RecommendedProducts component="RecommendedProducts"/>
            <NewSection component="NewSection"/>
            <ContactSection/>
            </>
      )}
    </div>
  )
}






