import React, { useState, useEffect } from 'react';

//componentes 
import  FeaturedProducts  from 'components/Cards/FeaturedProducts';
import  RecommendedProducts  from 'components/Cards/RecommendedProducts';
import  AboutUsHome  from 'components/Home/AboutUsHome';
import { CarruselCatalogue } from 'components/Home/CarruselCatalogue';
import  NewSection  from 'components/NewsCards/NewSection';
import  BannerCarrousel  from 'components/BannerMain/BannerCarrousel';
import  CarruselMain  from 'components/CarruselHomeMain/CarruselMain';
import Loader from "components/Loader/Loader";
import ContactSection from 'components/Home/Contact/ContactSection';

// Data
import { BANNERSPUBLICIDAD, BANNERSHOME } from '../routers/index';




export const Home = () => {

  const [loanding, setLoanding] = useState(false);
  const [banner, setBanner] = useState([]);
  const [bannerHome, setBannerHome] = useState([]);

  //Peticion principal
  const getInfo = async () => {

    //Estado del Loanding Verdadero
    setLoanding(true);

    //Banner Publicidad -- Peticion a la api
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERSPUBLICIDAD}`);
    const res = await response.json();
    setBanner(res.data);

    //Banner Home -- Petición a la api 
    const respon = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERSHOME}`);
    const resp = await respon.json();
    setBannerHome(resp.data);

    //Estado del Loanding Falso
    setLoanding(false);

  }

  useEffect(() => {
    getInfo();
  },[])


  return (
    <div style={{backgroundColor:'#F9F9F9'}} >
      {
          loanding ?( <Loader/>):(
            <>
            <CarruselMain banner={bannerHome} component={"CarruselMain"} />
            <AboutUsHome/>
            <CarruselCatalogue component="CarruselCatalogue"/>
            <FeaturedProducts component="FeaturedProducts"/>
            <BannerCarrousel banner={banner} component={"BannerCarrousel"} />
            <RecommendedProducts component="RecommendedProducts"/>
            <NewSection component="NewSection"/>
            <ContactSection/>
            </>
      )
    }
    </div>
  )
}
